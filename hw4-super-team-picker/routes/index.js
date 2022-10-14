const express = require('express');
const router = express.Router()

const knex = require('../db/client')

// router.use("/cohorts", router)
// router.use("/new", router)


router.get('/cohorts',(req, res) => {
    res.render('cohorts')
    })
    
router.get('/new',(req, res) => {
    
    res.render('new')
    })






module.exports = router;