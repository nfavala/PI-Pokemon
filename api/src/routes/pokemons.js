const router = require('express').Router();
const { Pokemon, Type } = require("../db.js"); 
const axios = require('axios').default;
const API40 = "https://pokeapi.co/api/v2/pokemon/?limit=40";
const API = "https://pokeapi.co/api/v2/pokemon/";

router.get('/', async (req, res) => {

if (req.query.name){
const pokemonsByName = [];

 const pokeName = await axios.get(`${API}/${req.query.name}`)
pokemonsByName.push(pokeName.data) 

allDataByName = pokemonsByName.map(data =>{
    return {
        name: data.name,
        height: data.height,
        weight: data.weight,
        image: data.sprites.other.dream_world.front_default,
        hp: data.stats[0].base_stat,
        life: data.stats[2].base_stat,
        types: data.types.map((data) => data.type.name).join(", "),

    }
    })
res.json(allDataByName);
}
const listPokemons = [];
try{
    const pokeApi = await axios.get(API40);
    pokeApi.data.results.forEach((data) => listPokemons.push(data.url));
    // console.log(listPokemons)

    let promises = [];
    listPokemons.forEach((data) => {
        let promise = axios.get(data);
        promises.push(promise);
    });
    let resolvePromises = await Promise.all(promises);

    const pokeData = resolvePromises.map((pokemon) => {
        return {
            // id: pokemon.data.id,
            name: pokemon.data.name,
            // weight: pokemon.data.weight,
            // height: pokemon.data.height,
            image: pokemon.data.sprites.other.dream_world.front_default,
            hp: pokemon.data.stats[0].base_stat,
            types: pokemon.data.types.map((data) => data.type.name).join(", "),
        }
    })

    let dbPokemons = await Pokemon.findAll({
        attributes: ['name', 'weight', 'height', 'life'], 
        include: Type

    })


    finalList = pokeData.concat(dbPokemons)

    res.status(200).json(finalList);
} catch(e) {
    console.log(e);
}
});


router.get("/:idPokemon", async (req, res) => {
const {idPokemon} = req.params;
const pokeById = [];
try {
    const pokeId = await axios.get(`${API}/${idPokemon}`)
    pokeId.data.forms.forEach((data) => pokeById.push(data.url));

const IdPromises = [];

pokeById.forEach((data) => {
    let promise = axios.get(data);
        IdPromises.push(promise);
    });
    let resolveIdPromises = await Promise.all(IdPromises);
    console.log(resolveIdPromises);

const IdPokemons = resolveIdPromises.map((poke) => {
    return {
        name: poke.data.name,
        id: poke.data.id,
        image: poke.data.sprites.front_default,
        types: poke.data.types.map((data) => data.type.name).join(", "),
    
    }

})
res.status(200).json(IdPokemons)
console.log(poke.data.pokemon)

}catch(e) {
    console.log(e);
}
})


router.post("/", async (req, res) => {
let {name, weight, height, strength, life, defense, speed,hp, types, image} = req.body;
try{
    const createdPokemon = await Pokemon.create({
        name,
        weight,
        height,
        strength,
        life,
        defense,
        speed,
        hp,
        image
    });

    await createdPokemon.addType(types)

    res.status(200).json(createdPokemon);
}catch(e){
    console.log(e)
};

})
module.exports = router;


