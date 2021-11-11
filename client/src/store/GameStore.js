import {makeAutoObservable} from "mobx";



export  default  class GameStore{
    constructor() {
        this._genres = [
            {id:1,name:'Хоррор'},
            {id:2,name: 'RPG'},
            {id:3,name: 'Шутер'},
            {id:4,name: 'Гонки'}

        ]
        this._developers = [
            {id:1,name:"Ubi"},
            {id:2, name: "CDProject"},
            {id:3,name:"Ubi"},
            {id:4, name: "CDProject"},
            {id:5,name:"Ubi"},
            {id:6, name: "CDProject"}
        ]
        this._platforms=[
            {id:1,name:"PC"},
            {id:2,name:"MAC"}
        ]
        this._games = [
            {id:1, name:"Silent Hill", price: 20, rating: 5, img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngkey.com%2Fpngs%2Fsilent-hill%2F&psig=AOvVaw1-pz-nCiRulkgzWiolSiBJ&ust=1636292580075000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiviYfvg_QCFQAAAAAdAAAAABAD'},
            {id:2, name:"Silent Hill", price: 20, rating: 5, img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngkey.com%2Fpngs%2Fsilent-hill%2F&psig=AOvVaw1-pz-nCiRulkgzWiolSiBJ&ust=1636292580075000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiviYfvg_QCFQAAAAAdAAAAABAD'},
            {id:3, name:"Silent Hill", price: 20, rating: 5, img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngkey.com%2Fpngs%2Fsilent-hill%2F&psig=AOvVaw1-pz-nCiRulkgzWiolSiBJ&ust=1636292580075000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiviYfvg_QCFQAAAAAdAAAAABAD'},
            {id:4, name:"Silent Hill", price: 20, rating: 5, img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngkey.com%2Fpngs%2Fsilent-hill%2F&psig=AOvVaw1-pz-nCiRulkgzWiolSiBJ&ust=1636292580075000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiviYfvg_QCFQAAAAAdAAAAABAD'},
            {id:5, name:"Silent Hill", price: 20, rating: 5, img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngkey.com%2Fpngs%2Fsilent-hill%2F&psig=AOvVaw1-pz-nCiRulkgzWiolSiBJ&ust=1636292580075000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiviYfvg_QCFQAAAAAdAAAAABAD'}
        ]
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