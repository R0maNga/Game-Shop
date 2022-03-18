const Router = require('express')
const router = new Router()
const game_orderController = require('../controllers/game_orderController ')


router.post('/', game_orderController.createGameOrder)
router.get('/', game_orderController.getAllGameOrder)




module.exports = router