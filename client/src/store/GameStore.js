import {makeAutoObservable} from "mobx";



export  default  class GameStore{
    constructor() {
        this._genres = []
        this._developers = []
        this._platforms=[
            {id:1,name:"PC"},
            {id:2,name:"MAC"}
        ]
        this._games = []
        this._selectedGenre={}
        this._selectedDeveloper={}
        makeAutoObservable(this)
    }

    setGenres(genres){
        this._genres= genres
    }

    setDevelopers(developers){
        this._developers = developers
    }
    setPlatforms(platforms){
        this._platforms = platforms
    }
    setGames(games){
        this._games = games
    }

    setSelectedGenre(genre){
        this._selectedGenre=genre

    }
    setSelectedDeveloper(developer){
        this._selectedDeveloper=developer

    }


    get genres(){
        return this._genres
    }
    get developers(){
        return this._developers
    }
    get platforms(){
        return this._platforms
    }
    get games(){
        return this._games
    }
    get selectedGenre(){
        return this._selectedGenre
    }
    get selectedDeveloper(){
        return this._selectedDeveloper
    }
}