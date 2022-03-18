const {Order} =  require("../models/models");
const ApiError = require('../error/ApiError')


class OrderController {


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

    async getOne(req, res)
    { const {id} = req.params
        const order = await Order.findOne(
            {where:{id}}
        )
        return res.json(order)
    }

    async getAllOrders(req,res){
        const  order = await  Order.findAll()
        return  res.json(order)
    }

    async DeleteOne(req,res) {

        const {id}=req.params
        const genres = await Order.destroy(
            {where:{
                    id:id
                }}
        )
        return res.json(genres)
    }
}

module.exports= new OrderController()