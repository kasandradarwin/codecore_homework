const express = require('express');

const knex = require('../db/client')
const router = express.Router()

// router.use("/cohorts", router)
// router.use("/new", router)

// index all the cohorts
router.get('/',(req, res) => {
    knex('cohorts')
    .select('*').from('cohorts')
    .orderBy('created_at', 'desc')
    .then(cohorts => {
        res.render('cohorts/index', { cohorts: cohorts })
    });
    })
    
// render new cohort page
router.get('/new',(req, res) => {
    res.render('cohorts/new')
    })

//create new cohort
router.post('/', (req,res) => {
    knex('cohorts')
        .insert({
            team_name: req.body.team_name,
            members: req.body.team_members,
            logo_url: req.body.logo_url
        })
        .returning('*')
        .then(cohort => {
            cohort = cohort[0]
            res.redirect(`cohorts/${cohort.id}`)
        });
})

//show a single cohort
router.get('/:id', (req, res) => {
    return knex('cohorts')
    .select('*').from('cohorts')
    .where('id', req.params.id)
    .first()
    .then(cohort => {
        if (!cohort) {
            res.send("Cohort does not exist, you can create it though!")
        } else {
            res.render('cohorts/show', { cohort: cohort, method: req.query.method, quantity: req.query.quantity })
        }
        })
    });


// -----------------Show a single Post----------------
router.get('/:id', (req, res) => {
    knex('cohorts')
      .where('id', req.params.id)
      .first() // this will grab the first instance that matches the requirements
      .then(cohort => {
        if (!cohort) {
          res.send("Cohort does not exist, you can create it though!")
        } else {
          res.render('cohorts/show', {cohort: cohort})
        }
      })
  })
  
//   //------------Render Edit Post template---------------
  router.get('/:id/edit', (req, res) => {
    knex('cohorts')
    .where('id', req.params.id)
    .first()
    .then( cohort => {
      res.render('cohorts/edit', {cohort: cohort})
      //  res.render(`/cohorts/edit/${req.query.id}`, {cohort: cohort})
    })
  })
  
//   //---------------------Update particular cohort---------------
  router.patch('/:id', (req, res) => {
    knex('cohorts')
    .where('id', req.params.id)
    .update({
        team_name: req.body.team_name,
        members: req.body.team_members,
        logo_url: req.body.logo_url
    })
    .then(() => {
        res.redirect(`/cohorts/${req.params.id}`)
    })
  })


//   // --------------Delete/destroy a single Post---------
  router.delete("/:id", (req,res) => {
    knex('cohorts')
      .where('id', req.params.id)
      .del()
      .then(() => {
        res.redirect("/cohorts")
      })
    })







module.exports = router;