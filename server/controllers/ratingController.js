const {Rating} = require('../models/models')
const ApiError = require('../error/ApiError')
const  mysql = require('mysql2')



class RatingController{

    async createRating(req, res, next){
        try{
            let{rate,userId,gameId} = req.body

            const game = await Rating.create({rate,userId,gameId})
            return res.json(game)
        } catch (e) {
            next(ApiError.badRequest(e.message))

        }



    }

    async getAllRating(req,res){

        const  genre = await  Rating.findAll()
        return  res.json(genre)
    }


    async getOneRating(req, res)
    { const {userId} = req.params
        const game = await Rating.findAll(
            {where:{userId}}
        )
        return res.json(game)
    }




}
















module.exports= new RatingController()