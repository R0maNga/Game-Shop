

const {GameOrder} = require('../models/models')





class GameOrderController {


    /*async create(req, res) {

        let {GameId, OrderId} = req.body
        const game_order = await GameOrder.create({GameId, OrderId})
        return res.json(game_order)


    }

    async create(req, res, next) {
        try {
            let {total_price,basketId} = req.body
            console.log(basketId)
            const order = await Order.create({total_price,basketId})
            return res.json(order)
        } catch (e) {
            next(ApiError.badRequest(e.message))

        }
    }
*/

    async getAllGameOrder(req,res){

        const  genre = await  GameOrder.findAll()
        return  res.json(genre)
    }

    async createGameOrder(req, res ){
        try {
            let {gameId,orderId} = req.body

            const game_order = await GameOrder.create({gameId,orderId})

            return res.json(game_order)
        } catch (e) {
           console.log("ошибка")

        }
    }
}


module.exports= new GameOrderController ()