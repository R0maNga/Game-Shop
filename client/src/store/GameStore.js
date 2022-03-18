import {makeAutoObservable} from "mobx";



export  default  class GameStore{
    constructor() {
        this._genres = []
        this._developers = []
        this._platforms=[]
        this._games = []
        this._games1 = []
        this._mark=[]
        this._gameplatform=[]
        this._selectedGenre={}
        this._selectedDeveloper={}
        this._setSelectedMark={}
        this._selectedPlatform={}
        this._selectedGame={}
        this._FormData = null
        this._page = 1
        this._totalCount= 0
        this._limit = 3;
        makeAutoObservable(this)
    }



    setGenres(genres){
        this._genres= genres
    }

    setMark(mark){
        this._mark = mark
    }

    setFormData(FormData){
        this._FormData = FormData
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
    setSelectedMark(mark){
        this._setSelectedMark= mark
    }

    setSelectedGenre(genre){
        this.setPage(1)
        this._selectedGenre=genre

    }
    setSelectedDeveloper(developer){
        this.setPage(1)
        this._selectedDeveloper=developer

    }
    setSelectedGame(game){
        this._selectedGame=game

    }
    setSelectedGame(game){
        this._selectedGame=game

    }

    setSelectedPlatform(platform) {
        this.setPage(1)
        this._selectedPlatform = platform
    }
    setPage(page){
        this._page = page

    }
    setTotalCount(count){
        this._totalCount = count

    }


    get FormData(){
        return this._FormData
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
    get mark(){
        return this._mark
    }
    get selectedGenre(){
        return this._selectedGenre
    }
    get selectedDeveloper(){
        return this._selectedDeveloper
    }
    get selectedPlatform(){
        return this._selectedPlatform
    }
    get selectedGame(){
        return this._selectedGame
    }
    get selectedMark(){
        return this._setSelectedMark
    }

    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }

    get gameplatform(){
        return this._gameplatform
    }
}