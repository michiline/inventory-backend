import mongoose from 'mongoose'

const Schema = mongoose.Schema
const itemSchema = new Schema({
  name: {
    type: String
  },
  quantity: {
      type: Number
  },
  created: {
    type: Number,
    default: () => {
      return Date.now()
    }
  },
})

export default mongoose.model('Item', itemSchema)
