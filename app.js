let api ="https://www.omdbapi.com/?apikey=61e576a4&t="
let title = document.getElementById('title')
let director = document.getElementById('director')
let actors = document.getElementById('actors')
let collection = document.getElementById('collection')
let desc = document.getElementById('desc')
let awards = document.getElementById('awards')
let writer = document.getElementById('writer')
let ratings = document.getElementById('ratings')
let genre = document.getElementById('genre')
let date = document.getElementById('date')


function searchMovie(){
    let movieName = document.getElementById('movieName')
    let query = api+movieName.value 
    fetch(query).then((data)=>{
        return data.json()
    }).then((data)=>{
        title.innerText = data.Title;
        director.innerText = data.Director;
        actors.innerText = data.Actors;
        collection.innerText = data.BoxOffice;
        desc.innerText = data.Plot;
        awards.innerText = data.Awards;
        writer.innerText = data.Writer;
        ratings.innerText = data.imdbRating;
        genre.innerText = data.Genre;
        date.innerText = data.Released;
        poster.src = data.Poster 

    })
}