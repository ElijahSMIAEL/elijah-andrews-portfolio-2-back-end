import mongoose from "mongoose";

const workSchema = new mongoose.Schema({
  title: String,
  description: String,
  photo: { type: String },
  githubLink: String,
  deployedLink: String,
})

const Work = mongoose.model('Work', workSchema)

export { Work }