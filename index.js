const express = require('express')
const app= express()
const port= process.env.port ||5000;
const cors= require('cors')

app.use(cors())

 const categories= require('./data/Categories/Categories.json')
app.get('/', (rep, res)=>{
    res.send('Dragon is running')
})

app.get('/categories' ,(req, res)=>{
    res.send(categories)
})

app.listen(port,()=>{
    console.log(`Dragon server is running  ${port}`)
})