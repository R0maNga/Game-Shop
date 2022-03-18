const {Developer} = require('../models/models')
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

class DeveloperController{

    async DeleteOne(req,res) {

        const {id}=req.params
        const genres = await Developer.destroy(
            {where:{

                    id:id
                }}
        )
        return res.json(genres)



    }
    async create(req,res){


                const{name} = req.body
                const developer = await Developer.create({name})
                return res.json(developer)

    }
    async getAll(req,res){
      const  developer = await  Developer.findAll()
        return  res.json(developer)
    }

}
module.exports= new DeveloperController()