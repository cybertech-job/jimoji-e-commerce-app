const express =  require('express')
const router = express.Router()
const {stripeController} = require("../controllers/stripeController")

router.post("/payment", stripeController)
module.exports = router;