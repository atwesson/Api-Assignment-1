let arr= [];
const list = (imageUrls) => {
  let div = document.createElement("DIV");   
  div.innerHTML = "<div class='carousel-item'><img src=" + imageUrls + " class='d-block w-100' alt=''...'>";                 
  document.getElementsByClass("carousel-inner").appendChild(div);
}


const imageFinder = (pokemons) => {

	for(const pokemon of pokemons){
  	console.log(pokemon)
		fetch(pokemon.url)
    .then(response => response.json())
    .then(data => list(data.sprites.front_default))
  }
}

fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => response.json())
    .then(data => imageFinder(data.results))

