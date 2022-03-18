const Router = require('express')
const router = new Router()
const saleController = require('../controllers/saleController')


router.post('/',  saleController.createSale)
router.get('/:gameId', saleController.getOne)


module.exports = router