function addFilm() {
    var favoriteFilmCamp = document.querySelector('#filme')
    var favoriteFilm = favoriteFilmCamp.value 
    document.write("<img src=" + favoriteFilm + ">")
    listFilm(favoriteFilm)
}

function listFilm(filme) {
    var filmList = document.querySelector('#filmList')
    var filmElement = "<img src=" + filme + ">"
    filmList.innerHTML = filmList.innerHTML + filmElement
}