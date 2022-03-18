const Router = require('express')
const router = new Router()
const developerController = require('../controllers/developerController')

router.post('/', developerController.create)
router.get('/', developerController.getAll)
router.delete('/:id', developerController.DeleteOne)



module.exports = router