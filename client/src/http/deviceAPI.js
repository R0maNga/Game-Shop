import{$authHost,$host} from "./index";
import jwt_decode from "jwt-decode"


export const createGenre = async (genre)=>{
    const {data} = await $authHost.post('api/genre', genre)
    return data
}



export const createPay = async (pay)=>{
    const  {data} = await $authHost.post('api/paymentMethod', pay)
    return data
}

export const createOrder = async (order)=>{
    const  {data} = await $authHost.post('api/order', order)
    return data

}
export const createGame_Order = async (game_order)=> {

    const {data} = await $authHost.post('api/game_order', game_order)
    return data

}

export const UpdateGame= async (gameId)=>{
    const {data} = await $authHost.put('api/game', gameId)
    return data

}
export const fetchGenres = async ()=>{
    const {data} = await $host.get('api/genre')
    return data

}
export const createPlatform = async (platform)=>{
    const {data} = await $authHost.post('api/platform', platform)
    return data
}

export const fetchPlatform = async ()=>{
    const {data} = await $host.get('api/platform')
    return data

}


export const createDeveloper = async (developer)=>{
    const {data} = await $authHost.post('api/developer', developer)
    return data
}

export const createSale = async (sale)=>{
    const {data} = await $authHost.post('api/sale', sale)
    return data
}

export const createRate = async (rating)=>{
    const {data} = await $authHost.post('api/rating', rating)
    console.log(data)
    return data
}

export const fetchDevelopers = async ()=>{
    const {data} = await $host.get('api/developer')
    return data

}

export const createGame = async (game)=>{

    const {data} = await $authHost.post('api/game', game)
    console.log(data,game)
    return data
}

export const fetchGames = async (genreId, developerId, page/*,limit*/ )=> {
    const {data} = await $host.get('api/game', {params: {
            genreId, developerId, page/*,Number:limit*/
        }})
    return data

}



export const fetchGameOrders = async ()=> {
    const {data} = await $authHost.get('api/game_order')
    return data
}

export const fetchOrders = async ()=> {
    const {data} = await $authHost.get('api/order')
    return data
}
export const fetchOneRating = async (userId)=> {
    const {data} = await $authHost.get('api/rating/'+userId)
    return data
}
export const fetchRating = async ()=> {
    const {data} = await $authHost.get('api/rating/')
    return data
}

export const fetchOneGame = async (id)=>{
    const {data} = await $host.get('api/game/'+id)
    return data

}
export const fetchOneSale = async (gameId)=>{
    const {data} = await $host.get('api/sale/'+gameId)
    return data

}
export const fetchOneOrder = async (id)=> {
    const {data} = await $authHost.get('api/order/' + id)
    return data
}
export const deleteGame = async (id)=>{
    const {data} = await $authHost.delete('api/game/' +id)
    return data
}

export const deleteGenre = async (id)=>{
    const {data} = await $authHost.delete('api/genre/' +id)
    return data
}
export const deleteOrder = async (id)=>{
    const {data} = await $authHost.delete('api/order/' +id)
    return data
}
export const deleteDeveloper = async (id)=>{
    const {data} = await $authHost.delete('api/developer/' +id)
    return data
}
export const fetchOneUser = async (id)=>{
    const {data}= await $authHost.get('api/user/'+id)
    return data
}
