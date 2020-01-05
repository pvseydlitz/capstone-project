import React, { useState, useEffect } from 'react'

export default function App() {
  const [files, setFiles] = useState([])
  const [file, setFile] = useState('')
  useEffect(() => {
    loadFiles()
  }, [])
  function loadFiles() {
    fetch('/api/files')
      .then(res => res.json())
      .then(files => {
        if (files.message) {
          console.log('no files')
        } else {
          setFiles(files)
          console.log(files)
        }
      })
  }

  function fileChanged(event) {
    const f = event.target.files[0]
    setFile(f)
  }
  function uploadFile(event) {
    event.preventDefault()

    let data = new FormData()
    data.append('file', file)
    fetch('/api/files', {
      method: 'POST',
      body: data,
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          console.log('success')
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
    <div className="App">
      <div className="App-content">
        <form onSubmit={uploadFile}>
          <input type="file" onChange={fileChanged} />
          <button>Upload</button>
        </form>
        <div>
          {files.map((file, index) => {
            return (
              <section>
                <a href={`http://localhost:3333/api/files/${file.filename}`}>
                  {file.filename}
                </a>

                <button onClick={deleteFile} id={file._id}>
                  Remove
                </button>
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
