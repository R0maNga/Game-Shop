const sequelize=require('../db')
const {DataTypes} = require('sequelize')

const User= sequelize.define('user',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    email:{type:DataTypes.STRING, unique:true},
    password: {type:DataTypes.STRING},
    role: {type:DataTypes.STRING, defaultValue:"USER"},
})
const Basket= sequelize.define('basket',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},

})
const Order= sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    total_price: {type: DataTypes.DECIMAL,},
    date_order: {type: DataTypes.DATE},
})
const PaymentMethod= sequelize.define('PaymentMethod',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    total_sum:{type:DataTypes.DECIMAL,},
    name_of_payment: {type:DataTypes.STRING},

})
const GameOrder= sequelize.define('game_order',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},

})
const Game= sequelize.define('game',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, unique: true, allowNull:false},
    price:{type:DataTypes.DECIMAL, defaultValue:0},
    rating:{type:DataTypes.INTEGER, defaultValue: 0},
    img:{type:DataTypes.STRING, defaultValue:0},

})
const Sale= sequelize.define('sale', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    sale_persent: {type: DataTypes.INTEGER,},
    date_start:{type:DataTypes.DATE,},
    date_end:{type:DataTypes.DATE,},
})

const Developer= sequelize.define('developer',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, unique: true, allowNull:false},
})

const Genre= sequelize.define('genre',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, unique: true, allowNull:false},
})

const GamePlatform= sequelize.define('gamePlatform',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    platform_name:{type:DataTypes.STRING, unique: true, allowNull:false},
})
const Rating= sequelize.define('rating',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    rate:{type:DataTypes.INTEGER, allowNull:false},
})

const GameDeveloper= sequelize.define('game_developer',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},

})

const GameGenre= sequelize.define('game_genre',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},

})



User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)



Order.hasOne(PaymentMethod)
PaymentMethod.belongsTo(Order)

Game.hasMany(Developer)
Developer.belongsTo(Game)

Game.hasOne(Sale)
Sale.belongsTo(Game)

Game.hasMany(GamePlatform)
GamePlatform.belongsTo(Game)

Order.hasMany(GameOrder)
GameOrder.belongsTo(Order)

Game.hasMany(GameOrder)
GameOrder.belongsTo(Game)

Game.belongsToMany(Developer, {through:GameDeveloper})
Developer.belongsToMany(Game, {through:GameDeveloper})

Game.belongsToMany(Genre, {through:GameGenre})
Genre.belongsToMany(Game, {through:GameGenre})

Basket.hasMany(Order,{constraints: false})
Order.belongsTo(Basket,{constraints: false})

module.exports={
    User, Basket, Sale, GameGenre, GameDeveloper, Game, Developer, GameOrder, Order, GamePlatform, Genre, PaymentMethod
}