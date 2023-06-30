import express from 'express'

const app = express()

app.use(express.json())


const port = process.env.PORT || 3000;

const start = ()=>{
    console.log(`server running on port ${port}...`)
}

start()