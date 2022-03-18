const {Genre} = require('../models/models')
const ApiError = require('../error/ApiError')
const  mysql = require('mysql2')
const express = require('express')


const pool= mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "курсач"
});

function getConnection() {
    return pool
}

class GenreController{

    async create(req,res){
        const {name} = req.body
        const genre = await Genre.create({name})
        console.log(res)
        return  res.json(genre)
    }
    async getAll(req,res){
            const  genre = await  Genre.findAll()
            return  res.json(genre)
    }




    async DeleteOne(req,res) {

        const {id}=req.params
        const genres = await Genre.destroy(
            {where:{
                    id:id
                }}
        )
        return res.json(genres)
    }


}
module.exports= new GenreController()