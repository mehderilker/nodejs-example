const express = require('express')

const app = express()

app.get('' , (req,res) =>{
    res.send('Hello Express ! ')
} )
// Routers = main / help / about 

app.get('/about', (req,res) => {
    res.send('About Page')
})

app.get('/help',(req,res)=> {
    res.send('Help Page')
})

app.listen(3000, () => {
    console.log("Connecting 3000 port ...")
})