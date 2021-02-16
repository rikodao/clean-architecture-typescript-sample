import express from 'express'

import { responsHeader } from './middleware/responsHeader'

import BaseRouter from './router'
const app: express.Express = express()

app.use(responsHeader)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', BaseRouter);

export default app;
