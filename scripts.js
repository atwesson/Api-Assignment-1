
fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => response.json())
    .then(function (json) {
        for(poke of json.results){
            console.log(poke.name)
            let pokeName = document.createElement('H1');
            pokeName.innerHTML = poke.name;
            document.body.appendChild(pokeName);
            fetch(poke.url)
                .then(response => response.json())
                .then(function (json) {
                    console.log(json.sprites.front_default)
                    let pokePic = document.createElement('IMG');
                    pokePic.src = json.sprites.front_default;
                    document.body.appendChild(pokePic);
            })
        }
    })
