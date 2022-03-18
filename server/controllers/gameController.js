const uuid = require('uuid')
const path = require('path')
const {Game} = require('../models/models')
const ApiError = require('../error/ApiError')
const  mysql = require('mysql2')

const pool= mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "курсач"
});

function getConnection() {
    return pool
}
class GameController{

    async DeleteOne(req,res) {

        const {id}=req.params
        const genres = await Game.destroy(
            {where:{

                id:id
            }}
        )
        return res.json(genres)



    }

     async create(req, res, next){
         try{
             let{name, price, genreId, developerId, gamePlatformId} = req.body
             const {img} = req.files
             let filename = uuid.v4() + ".jpg"
             img.mv(path.resolve(__dirname, '..', 'static', filename))
             const game = await Game.create({name, price, genreId, developerId, gamePlatformId, img: filename})
             return res.json(game)
         } catch (e) {
             next(ApiError.badRequest(e.message))
         }
    }



    async getAll(req,res){
         let {genreId, developerId, page, }= req.query
        page = page || 1
        let games;
         if (!genreId && !developerId){
             games = await Game.findAndCountAll({})

         }
         if (genreId && !developerId){
             games = await Game.findAndCountAll({where:{genreId}})

         }
         if(!genreId && developerId){
             games = await Game.findAndCountAll({where:{developerId}})
         }
         if (genreId && developerId){
             games = await Game.findAndCountAll({where:{genreId,developerId}})

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
    async updateOne(req,res) {
        const{rating,id}=req.body

        const game = await Game.update(
            {
            rating: rating,
        },
            {
            where:{
                id:id,
            },
        }
        )
        return res.json(game)

    }




}
module.exports= new GameController()