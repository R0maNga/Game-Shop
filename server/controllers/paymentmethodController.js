const {PaymentMethod} = require('../models/models')
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

class paymentmethodController{



    async createPayment(req, res ){
        try {
            let {orderId,total_price,name_of_payment} = req.body

            const game_order = await PaymentMethod.create({orderId,total_price,name_of_payment})

            return res.json(game_order)
        } catch (e) {
            console.log("ошибка")

        }
    }
    async getAll(req,res){

        const  platform = await  PaymentMethod.findAll()
        return  res.json(platform)
    }

    DeleteOne(req,res) {
        const connection = getConnection()
        const queryString = "DELETE FROM gameplatforms WHERE id = ?"

        connection.query(queryString, [req.params.id], (error,rows) => {
            console.log("======================================")
            console.log(req.params.id)
            if (error) {
                res.sendStatus(500)
            }
            res.json(rows)
            res.end()

        })


    }

}
module.exports= new paymentmethodController()