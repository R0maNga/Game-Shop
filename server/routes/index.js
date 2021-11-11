const Router = require('express')
const router = new Router()
const gameRouter=require('./gameRouter')
const userRouter=require('./userRouter')
const developerRouter=require('./developerRouter')
const genreRouter=require('./genreRouter')

router.use('/user', userRouter)
router.use('/game', gameRouter)
router.use('/genre',genreRouter)
router.use('/developer',developerRouter)

module.exports = router