const Router = require('express')
const router = new Router()
const platformController = require('../controllers/platformController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/'/*,checkRole('ADMIN')*/,  platformController.create)
router.get('/', platformController.getAll)
router.delete('/:id', platformController.DeleteOne)



module.exports = router