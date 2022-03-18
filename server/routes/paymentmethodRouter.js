const Router = require('express')
const router = new Router()
const paymentmethodController = require('../controllers/paymentmethodController')


router.post('/',  paymentmethodController.createPayment)
router.get('/', paymentmethodController.getAll)
router.delete('/:id', paymentmethodController.DeleteOne)



module.exports = router