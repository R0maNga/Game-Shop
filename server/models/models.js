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
    total_price: {type: DataTypes.DECIMAL},
    date_order: {type: DataTypes.DATE},
})
const PaymentMethod = sequelize.define('paymentmethod',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name_of_payment: {type:DataTypes.STRING},
    total_price:{type:DataTypes.STRING}

})
const GameOrder= sequelize.define('game_order',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},

})
const Game= sequelize.define('game',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, unique: true, allowNull:false},
    price:{type:DataTypes.DECIMAL, allowNull:false},
    rating:{type:DataTypes.INTEGER, defaultValue: 0},
    img:{type:DataTypes.STRING, allowNull:false},

})
const Sale= sequelize.define('sale', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    sale_persent: {type: DataTypes.INTEGER,},
    date_start:{type:DataTypes.DATE,allowNull:true},
    date_end:{type:DataTypes.DATE,allowNull:true},
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
    userId:{type:DataTypes.INTEGER,allowNull:false},
    gameId:{type:DataTypes.INTEGER,allowNull:false}
})






User.hasOne(Basket)
Basket.belongsTo(User, {foreignKey:'userId',onDelete:'cascade'});

User.hasMany(Rating)
Rating.belongsTo(User)

Game.hasMany(Rating)
Rating.belongsTo(Game)



Order.hasOne(PaymentMethod)
PaymentMethod.belongsTo(Order)

Developer.hasOne(Game)
Game.belongsTo(Developer,{foreignKey:'developerId',onDelete:'cascade'})

Game.hasOne(Sale)
Sale.belongsTo(Game)

GamePlatform.hasOne(Game)
Game.belongsTo(GamePlatform,{foreignKey:'gamePlatformId',onDelete:'cascade'})

Genre.hasOne(Game)
Game.belongsTo(Genre,{foreignKey:'genreId',onDelete:'cascade'})

Order.hasMany(GameOrder)
GameOrder.belongsTo(Order)

Game.hasMany(GameOrder)
GameOrder.belongsTo(Game)


Basket.hasMany(Order,{constraints: false})
Order.belongsTo(Basket,{constraints: false})

module.exports={
    User, Basket, Sale,  Game, Developer, GameOrder, Order, GamePlatform, Genre, PaymentMethod,Rating
}