const express = require('express')
const path = require('path')

const app = express()

const publicDirectoryPath = path.join(__dirname,'../public')

app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath))

app.get('',(req,res) => {
    res.render('index',{
        title:'Weather'
    })
})


// Routers = main / help / about 

app.get('/about', (req,res) => {
    res.render('about', {
        title:'About Page'
    } )
})

app.get('/help',(req,res)=> {
    res.send('HelPage')
})

app.listen(3000, () => {
    console.log("Connecting 3000 port ...")
})