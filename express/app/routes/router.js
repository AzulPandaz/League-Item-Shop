const express = require("express")
const router = express.Router()
const PORT = process.env.PORT || 3001
const fetch = (...args)=>import('node-fetch').then(({default:fetch})=>fetch(...args))

// api
router.get('/', (req,res)=>{
    res.json({
        "ALL Skateboards":`http://localhost:${PORT}/api/items`,
        'ALL Longboards': `http://localhost:${PORT}/api/items/longboard`,
        "All Street Boards":`http://localhost:${PORT}/api/items/streetboard`,
        "All Penny Boards":`http://localhost:${PORT}/api/items/pennyboard`,
        "All Cruiser Boards":`http://localhost:${PORT}/api/items/cruiserboard`
    })
})
router.use('/items/longboard', require('./api/longboardRoutes'))
router.use('/items/cruiserboard', require('./api/cruiserboardRoutes'))
router.use('/items/pennyboard', require('./api/pennyboardRoutes'))

router.use('/items/streetboard', require('./api/streetboardRoutes'))

router.use('/items', require('./api/skateboardRoutes'))



module.exports = router
