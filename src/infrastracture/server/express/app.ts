import express from 'express'

import { responsHeader } from '~/infrastracture/server/express/middleware/responsHeader'

import BaseRouter from './router'
const app: express.Express = express()

app.use(responsHeader)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', BaseRouter);
app.get('/healthz', (req, res) => {
    res.send('OK');
});
export default app;
