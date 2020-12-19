const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()
require('./database')

app.set('port', process.env.PORT  || 3000)
app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res)=>{
    res.render("./src/public/index")
})

app.use(require('./routes/gems'))

module.exports = app