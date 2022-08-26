const express = require('express')
const router = express.Router()


// Destructure
const{ skateboardDao: dao} = require('../../daos/dao')

router.get('/',(req,res)=>{
    dao.findAll(res, dao.table)
})

// api/film/:id
router.get('/:id', (req,res)=>{
    dao.findById(res, dao.table, req.params.id)
})


router.post('/create', (req,res)=>{
    dao.create(req,res)
})





module.exports = router