const {GamePlatform} = require('../models/models')
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

class PlatformController{



    async create(req,res){
        const {platform_name} = req.body
        const platform = await GamePlatform.create({platform_name})
        return  res.json(platform)

    }
    async getAll(req,res){

        const  platform = await  GamePlatform.findAll()
        return  res.json(platform)
    }

    DeleteOne(req,res) {
        const connection = getConnection()
        const queryString = "DELETE FROM paymentmethods WHERE id = ?"

        connection.query(queryString, [req.params.id], (error,rows) => {

            console.log(req.params.id)
            if (error) {
                res.sendStatus(500)
            }
            res.json(rows)
            res.end()

        })


    }

}
module.exports= new PlatformController()