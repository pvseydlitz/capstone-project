const router = require('express').Router()
const multer = require('multer')
const Grid = require('gridfs-stream')
const mongoose = require('mongoose')
const withAuth = require('./middleware')

mongoose.Promise = global.Promise
Grid.mongo = mongoose.mongo
const connection = mongoose.connection
connection.on('error', console.error.bind(console, 'connection error:'))

connection.once('open', function() {
  const gfs = Grid(connection.db)
  const storage = require('multer-gridfs-storage')({
    db: connection.db,
    file: (req, file) => {
      return {
        filename: file.originalname,
      }
    },
  })
  const singleUpload = multer({ storage: storage }).single('file')

  router.route('/files/:filename').get(withAuth, function(req, res) {
    gfs.files.find({ filename: req.params.filename }).toArray((err, files) => {
      if (!files || files.length === 0) {
        return res.status(404).json({
          message: 'Could not find file',
        })
      }

      const readstream = gfs.createReadStream({
        filename: files[0].filename,
      })
      res.set('Content-Type', files[0].contentType)
      return readstream.pipe(res)
    })
  })

  router.route('/files').get(withAuth, function(req, res) {
    gfs.files.find().toArray((err, files) => {
      if (!files || files.length === 0) {
        return res.status(404).json({
          message: 'Could not find files',
        })
      }
      return res.json(files)
    })
  })

  router.post('/files', singleUpload, (req, res) => {
    if (req.file) {
      return res.json({
        success: true,
        file: req.file,
      })
    }
    res.send({ success: false })
  })

  router.route('/files/:id').delete(function(req, res) {
    gfs.remove({ _id: req.params.id }, err => {
      if (err) return res.status(500).json({ success: false })
      return res.json({ success: true })
    })
  })
})
module.exports = router
