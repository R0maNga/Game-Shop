const {Sale} = require('../models/models')


class SaleController{


    async createSale(req, res, next){



                let{sale_persent,gameId} = req.body
                const game = await Sale.create({sale_persent,gameId})
                return res.json(game)



    }

    async getOne(req, res)
    { const {gameId} = req.params
        const game = await Sale.findOne(
            {where:{gameId}}
        )
        return res.json(game)
    }



}













module.exports= new SaleController()