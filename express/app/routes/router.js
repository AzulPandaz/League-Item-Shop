const express = require("express")
const router = express.Router()
const PORT = process.env.PORT || 3001
const fetch = (...args)=>import('node-fetch').then(({default:fetch})=>fetch(...args))

// api
router.get('/', (req,res)=>{
    res.json({
        "ALL Items":`http://localhost:${PORT}/api/items`,
        'ALL Fighter Items': `http://localhost:${PORT}/api/items/fighter`,
        "All Marksman Items":`http://localhost:${PORT}/api/items/marksman`,
        "All Tank Items":`http://localhost:${PORT}/api/items/Tank`,
        "All Assassin Items":`http://localhost:${PORT}/api/items/assassin` ,
        "All Support Items":`http://localhost:${PORT}/api/items/support`
    })
})
router.use('/items/longboard', require('./api/marksmanItemsRoutes'))
router.use('/items/cruiserboard', require('./api/supportItems'))
router.use('/items/pennyboard', require('./api/fighterItemsRoutes'))
router.use('/items/streetboard', require('./api/tankItemsRoutes'))
router.use('/items', require('./api/assassinItemsRoutes'))
router.use('/items', require('./api/supportItemsRoutes'))




module.exports = router
