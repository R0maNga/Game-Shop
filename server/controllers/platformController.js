const {Platform} = require('../models/models')
const ApiError = require('../error/ApiError')

class PlatformController{
    async create(req,res){
        const {name} = req.body
        const platform = await Platform.create({name})
        return  res.json(platform)

    }
    async getAll(req,res){

        const  platform = await  Type.findAll()
        return  res.json(platform)
    }

}
module.exports= new PlatformController()