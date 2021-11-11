const Router = require('express')
const router = new Router()
const platformController = require('../controllers/platformController')

router.post('/', platformController.create)
router.get('/', platformController.getAll)



module.exports = router