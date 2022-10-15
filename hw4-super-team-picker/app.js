const express = require('express');
const app = express()

const cohorts = require('./routes/cohorts')

app.set('view engine', 'ejs')
app.set('views','views')

const path= require('path') 
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}))

const logger = require('morgan')
app.use(logger('dev'))

const cookieParser = require('cookie-parser');
app.use(cookieParser())

const methodOverride = require('method-override');
app.use(
    methodOverride((req,res) => {
        if(req.body && req.body._method){
            const method = req.body._method;
            return method;
        }
    })
)

// the welcome/home page:

app.get('/',(req, res) => {
   // res.send("<h1> This is my root page. Hi there! </h1>")
   res.render('home')
   })

app.use('/cohorts', cohorts)

const PORT = process.env.PORT || 3000;
const DOMAIN = 'localhost'
//const ENVIRONMENT = app.get('env')


app.listen(PORT, DOMAIN, () =>{
    console.log(`Server is listening on http://${DOMAIN}:${PORT}`)
})
