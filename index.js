import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import scrappedDataRouter from './router/scrapData.router.js'

dotenv.config()

const app = express()

const PORT = 4000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res)=>{
    res.status(200).json({message: "Server is online"})
})
app.use('/data', scrappedDataRouter)

app.listen(PORT)
console.log(`Server is started on http://localhost:${PORT}`)