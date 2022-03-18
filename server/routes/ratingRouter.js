const Router = require('express')
const router = new Router()
const ratingController = require('../controllers/ratingController')


router.post('/',  ratingController.createRating)
router.get('/:userId', ratingController.getOneRating)
router.get('/', ratingController.getAllRating)


module.exports = router