const Router = require('express')
const router = new Router()
const gameRouter=require('./gameRouter')
const userRouter=require('./userRouter')
const developerRouter=require('./developerRouter')
const genreRouter=require('./genreRouter')
const platformRouter=require('./platformRouter')
const orderRouter = require('./orderRouter')
const  basketRouter = require('./basketRouter')
const game_orderRouter = require('./game_orderRouter')
const paymentMethodRouter = require('./paymentmethodRouter')
const ratingRouter = require('./ratingRouter')
const saleRouter = require('./saleRouter')

router.use('/user', userRouter)
router.use('/game', gameRouter)
router.use('/genre',genreRouter)
router.use('/developer',developerRouter)
router.use('/platform',platformRouter)
router.use('/order', orderRouter)
router.use('/basket', basketRouter)
router.use('/game_order',game_orderRouter)
router.use('/paymentMethod', paymentMethodRouter)
router.use('/rating', ratingRouter)
router.use('/sale',saleRouter)



module.exports = router
