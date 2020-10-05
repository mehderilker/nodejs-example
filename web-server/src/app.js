const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)
//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('',(req,res) => {
    res.render('index',{
        title:'Weather',
        name:'ilker'
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address!'
        })
    }
    res.send({
        forecats: 'It is snowing',
        location: 'Philadelphia',
        address:req.query.address
    })
})

// Routers = main / help / about 

app.get('/about', (req,res) => {
    res.render('about', {
        title:'About Page',
        name:'ilker'
    } )
})

app.get('/help',(req,res)=> {
    res.render('help',{
        title:'Help Page',
        name:'ilker'
    })
})
  
app.get('/products', (req, res) => {
    console.log(!req.query.search)
  if(!req.query.search) {
    return res.send({
        error: ' You must provide a search term'
    })
  }
  console.log(req.query.search)
  res.send({
      products:[]
  })
})

app.get('/help/*', (req, res) => {
    res.render('404',{
        title:'404',
        name:'ilker',
        errorMessage:'Page not found'
    })
})
app.get('*', (req, res) => {
    res.render("404",{
        title:'404',
        name:'ilker',
        errorMessage:'Page not found'
    })
})

app.listen(3000, () => {
    console.log("Connecting 3000 port ...")
})