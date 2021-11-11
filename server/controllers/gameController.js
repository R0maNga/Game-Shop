const uuid = require('uuid')
const path = require('path')
const {Game} = require('../models/models')
const ApiError = require('../error/ApiError')

class GameController{
     async create(req, res){
         try{
             const{name, price, genreId, developerId, platformId} = req.body
             const {img} = req.files
             let filename = uuid.v4() + ".jpg"
             img.mv(path.resolve(__dirname, '..', 'static', filename))
             const game = await Game.create({name, price, genreId, developerId, platformId, img: filename})
             return res.json(game)
         } catch (e) {
             next(ApiError.badRequest(e.message))

         }



    }
    async getAll(req,res){
         const {genreId, developerId, limit, page}= req.body
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let games;
         if (!genreId && !developerId){
             games = await Game.findAndCountAll({limit, offset})

         }
         if (genreId && !developerId){
             games = await Game.findAndCountAll({where:{genreId,limit, offset}})

         }
         if(!genreId && developerId){
             games = await Game.findAndCountAll({where:{developerId,limit, offset}})
         }
         if (genreId && developerId){
             games = await Game.findAndCountAll({where:{genreId,developerId,limit, offset}})

         }
         return res.json(games)

    }

    async getOne(req, res)
    { const {id} = req.params
        const game = await Game.findOne(
            {where:{id}}
        )
        return res.json(game)
    }

}
module.exports= new GameController()