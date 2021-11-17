import{$authHost,$host} from "./index";
import jwt_decode from "jwt-decode"


export const createGenre = async (genre)=>{
    const {data} = await $authHost.post('api/genre', genre)
    return data
}

export const fetchGenres = async ()=>{
    const {data} = await $host.get('api/genre')
    return data

}

export const createDeveloper = async (developer)=>{
    const {data} = await $authHost.post('api/developer', developer)
    return data
}

export const fetchDevelopers = async ()=>{
    const {data} = await $host.get('api/developer')
    return data

}

export const createGame = async (game)=>{
    const {data} = await $authHost.post('api/game', game)
    return data
}

export const fetchGames = async ()=> {
    const {data} = await $host.get('api/game')
    return data

}
export const fetchOneGame = async (id)=>{
    const {data} = await $host.get('api/game/'+id)
    return data

}
