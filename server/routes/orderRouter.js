const Router = require('express')
const router = new Router()
const orderController = require('../controllers/orderController')


router.post('/',  orderController.create)
/*router.get('/', orderController.getOneOrder)*/
router.get('/',orderController.getAllOrders)
router.delete('/:id',orderController.DeleteOne)



module.exports = router