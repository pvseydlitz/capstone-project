const router = require('express').Router()
const multer = require('multer')
const { /* mongo, */ connection } = require('mongoose')
var mongoose = require('mongoose')
var Grid = require('gridfs-stream')
Grid.mongo = mongoose.mongo

var conn = mongoose.createConnection()
conn.once('open', function() {
  var gfs = Grid(conn.db)
  // all set!

  const storage = require('multer-gridfs-storage')({
    db: connection.db,
    file: (req, file) => {
      return {
        filename: file.originalname,
      }
    },
  })
  // sets file input to single file
  const singleUpload = multer({ storage: storage }).single('file')

  router.route('/files/:filename').get(function(req, res) {
    gfs.files.find({ filename: req.params.filename }).toArray((err, files) => {
      if (!files || files.length === 0) {
        return res.status(404).json({
          message: 'Could not find file',
        })
      }

      var readstream = gfs.createReadStream({
        filename: files[0].filename,
      })
      res.set('Content-Type', files[0].contentType)
      return readstream.pipe(res)
    })
  })

  router.route('/files').get(function(req, res) {
    gfs.files.find().toArray((err, files) => {
      if (!files || files.length === 0) {
        return res.status(404).json({
          message: 'Could not find files',
        })
      }
      return res.json(files)
    })
  })
  router.route('/files').post(
    singleUpload(function(req, res) {
      if (req.file) {
        return res.json({
          success: true,
          file: req.file,
        })
      }
      res.send({ success: false })
    })
  )

  router.route('/files/:id').delete(function(req, res) {
    gfs.remove({ _id: req.params.id }, err => {
      if (err) return res.status(500).json({ success: false })
      return res.json({ success: true })
    })
  })
})
module.exports = router
