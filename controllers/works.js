import { Work } from "../models/work.js";
import { v2 as cloudinary } from 'cloudinary'

function index(req, res) {
  Work.find({})
  .then(works => {
    res.json(works)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function create(req, res) {
  Work.create(req.body)
  .then(work => {
    res.json(work)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function addPhoto(req, res) {
  const imageFile = req.files.photo.path
  Work.findById(req.params.id)
  .then(work => {
    cloudinary.uploader.upload(imageFile, {tags: `${work.title}`})
    .then(image => {
      work.photo = image.url
      work.save()
      .then(work => {
        res.status(201).json(work.photo)
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({err: err.errmsg})
    })
  })
}

export {
  create,
  index,
  addPhoto,
}