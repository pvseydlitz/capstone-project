import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'

import Card from './Card'
import plus from '../icons/plus-file.svg'

export default function Home() {
  const [files, setFiles] = useState([])
  const [singleFile, setSingleFile] = useState('')
  const [picture, setPicture] = useState('Kein Dokument ausgewählt')
  const [showForm, setShowForm] = useState(false)

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

  function uploadFile(event) {
    event.preventDefault()
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
        } else {
          alert('Upload failed')
        }
      })
  }

  function deleteFile(event) {
    event.preventDefault()
    const id = event.target.id
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

  return (
    <Wrapper className="App">
      <div>
        <Headline>Dokumente</Headline>
        <Plus src={plus} onClick={() => setShowForm(!showForm)}></Plus>
        {showForm ? (
          <Form onSubmit={uploadFile}>
            <UploadWrapper>
              <Headline2 style={{ color: 'rgb(253 252 251)' }}>
                Dokument auswählen
              </Headline2>
              <input
                style={{ display: 'none' }}
                type="file"
                onChange={fileChanged}
              />
            </UploadWrapper>
            <ChoosenPicture>
              <em style={{ fontSize: '12px' }}>{picture}</em>
            </ChoosenPicture>
            <Button>
              <Headline2>Dokument hochladen</Headline2>
            </Button>
          </Form>
        ) : (
          ''
        )}
      </div>
      <CardWrapper active={showForm}>
        {files.map((file, index) => (
          <Card file={file} key={index} deleteFile={deleteFile}></Card>
        ))}
      </CardWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow-y: scroll;
  position: relative;
`
const Headline = styled.h1`
  color: rgb(187 179 163);
  font-size: 21px;
  font-weight: bold;
  position: absolute;
  top: 10px;
  margin: 0 20px;
`
const Plus = styled.img`
  position: absolute;
  top: 10px;
  right: 20px;
`
const Form = styled.form`
  display: grid;
  grid-template-rows: 25px 20px 25px;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  row-gap: 5px;
  justify-items: center;
  position: absolute;
  right: 20px;
  top: 60px;
`
const UploadWrapper = styled.label`
  background: rgb(201 193 171);
  padding: 4px 10px;
  border-radius: 5px;
`
const Headline2 = styled.h2`
  margin: 0;
  color: rgb(253 252 251);
  font-size: 14px;
`
const ChoosenPicture = styled.p`
  grid-row-start: 2;
  margin: 0;
  color: rgb(107, 107, 107);
  font-size: 14px;
`
const Button = styled.button`
  grid-column-start: 2;
  all: unset;
  background: rgb(201 193 171);
  padding: 4px 10px;
  border-radius: 5px;
`
const CardWrapper = styled.div`
  margin: ${props => (props.active ? '130px' : '50px')} 20px;
`
