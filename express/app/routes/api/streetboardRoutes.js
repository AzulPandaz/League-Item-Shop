const express = require('express')
const router = express.Router()


// Destructure
const{ streetboardDao: dao} = require('../../daos/dao')

// api/film
router.get('/',(req,res)=>{
    dao.findAll(res, dao.table)
})

router.get('/:id', (req,res)=>{
    dao.findById(res,dao.table,req.params.id)
}) 



module.exports = router
