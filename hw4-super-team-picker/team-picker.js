const express = require('express');
const app = express()

app.use(express.urlencoded({extended:true}))

const cookieParser = require('cookie-parser');
app.use(cookieParser())
app.use((req, res, next) => {
    const username = req.cookies.username

    res.locals.username = '';

    if (user) {
        res.locals.username = username;
        console.log(`Signed in as ${username}`)
    }
    next()
})

const logger = require('morgan')
app.use(logger('dev'))

const path= require('path')

app.get('/',(req, res) => {
   // res.send("<h1> This is my root page. Hi there! </h1>")
   res.render('welcome',{
    title: 'welcome to the meme page',
    memes: ['https://www.gamespot.com/a/uploads/scale_super/171/1712892/3854083-screenshot2021-07-09at6.14.50am.jpg', 'https://www.gamespot.com/a/uploads/scale_super/171/1712892/3854092-screenshot2021-07-09at6.35.52am.jpg','https://www.gamespot.com/a/uploads/scale_super/171/1712892/3854110-screenshot2021-07-09at1.24.20pm.jpg'
    ]
   })
})

app.set('view engine', 'ejs')
app.set('views','views')



app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000;
const DOMAIN = 'localhost'


app.listen(PORT, DOMAIN, () =>{
    console.log(`Server is listening on http://${DOMAIN}:${PORT}`)
})

