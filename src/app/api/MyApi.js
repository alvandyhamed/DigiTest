class Apis{
    ipUat={
        User:"https://imdb.hriks.com/user/",
        Category:"https://imdb.hriks.com/category/",
        movie:"https://imdb.hriks.com/movie/"
    }

    auth_token=this.ipUat.User+"auth-token"
    getCategory=this.ipUat.Category
    getMovies=this.ipUat.movie
    get(Apistr){
        return {Apistr}
    }

}
const apis=new Apis()
export default apis