import dotenv from 'dotenv'
import mongoose from 'mongoose'
import express from 'express'
import { catchErrors } from './utils'
import routes from './routes'

export default (app) => {
  if (process.env.NODE_ENV !== 'production') {
    dotenv.config()
  }
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  app.use(express.json())
  app.use(catchErrors)
  app.use(routes)
}