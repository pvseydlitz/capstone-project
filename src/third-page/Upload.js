import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'

import Globalstyles from '../general/Globalstyles'
import Grid from '../general/Grid2'
import Header from '../general/Header2'
import Footer from '../general/Footer'
import Form from './Form'
import Card from './Card'

export default function Upload() {
  const [files, setFiles] = useState([])
  const [singleFile, setSingleFile] = useState('')
  const [picture, setPicture] = useState('Kein Dokument ausgewählt')
  const [showForm, setShowForm] = useState(false)
  const [searchedItem, setSearchedItem] = useState('')
  useEffect(() => {
    loadFiles()
  }, [])

  function loadFiles() {
    fetch('/api/files')
      .then(res => res.json())
      .then(files => {
        if (files.message) {
        } else {
          setFiles(files)
        }
      })
  }

  function fileChanged(event) {
    const f = event.target.files[0]
    setSingleFile(f)
    const data = event.target.files
    if (data.length > 0) {
      setPicture(event.target.files[0].name)
    } else {
      setPicture('')
    }
  }

  function uploadFile() {
    let data = new FormData()
    data.append('file', singleFile)
    fetch('/api/files', {
      method: 'POST',
      body: data,
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          loadFiles()
          setShowForm(false)
        } else {
          alert('Upload failed')
        }
      })
  }

  function deleteFile(id) {
    fetch('/api/files/' + id, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(response => {
        console.log(response)
        if (response.success) loadFiles()
        else alert('Delete Failed')
      })
  }
  function checkInput(event) {
    setSearchedItem(event.target.value.toLowerCase())
  }

  return (
    <Grid>
      <Globalstyles></Globalstyles>
      <Header
        showSearchIcon={true}
        checkInput={checkInput}
        searchedItem={searchedItem.toLowerCase()}
      ></Header>
      <div style={{ overflowY: 'scroll' }}>
        <Form
          uploadFile={uploadFile}
          fileChanged={fileChanged}
          handleShowForm={() => setShowForm(!showForm)}
          showForm={showForm}
          picture={picture}
        ></Form>
        <CardWrapper>
          {files
            .filter(file => {
              const name = file.filename.toLowerCase()
              const query = searchedItem
              return query === '' || name.includes(query)
            })
            .map((file, index) => (
              <Card file={file} key={index} deleteFile={deleteFile}></Card>
            ))}
        </CardWrapper>
      </div>
      <Footer></Footer>
    </Grid>
  )
}
const CardWrapper = styled.div`
  margin: 20px;
  overflow-y: scroll;
`
