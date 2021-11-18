
const axios = require('axios').default;

export function getPokemons(){
return  async function(dispatch) {
  try{
    const dataPokemons = await axios.get("http://localhost:3001/pokemons")
  return dispatch({
    type: 'GET_POKEMONS',
    payload: dataPokemons.data
  })
  }catch(e) {
    console.log(e)
   }
  }
};

export const getPokemonByName = (name) => {
return async (dispatch) => {
  try {
    const pokemonName = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
    return dispatch({
      type:'GET_POKEMON_NAME',
      payload: pokemonName.data
    })
  } catch (e) {
    console.log(e);
  }
 }
};

export const getPokemonDetail = (name) => {
  return async (dispatch) => {
      try {
          const pokemon = await axios(`http://localhost:3001/pokemons/${name}`);
          return dispatch({
              type: 'GET_POKEMON_DETAIL',
              payload: pokemon.data
          })
      } catch (error) {
          console.log(error)
      }
  }
}

export const getPokemonsTypes = () => {
  return async (dispatch) => {
      try {
          const typePokemons = await axios.get("http://localhost:3001/types");
          return dispatch({
              type: 'GET_TYPE',
              payload: typePokemons.data
          })
      } catch (error) {
          console.log(error)
      }
  }
};

export const addPokemon = (newPoke) => {   //transformo pokemon creado en el objeto que la DB necesita
  return async () => {
      try {
          const objNewPoke = {
              name: newPoke.name,
              life: newPoke.life,
              attack: newPoke.attack,
              defense: newPoke.defense,
              speed: newPoke.speed,
              weight: newPoke.weight,
              height: newPoke.height,
              types: [newPoke.type1, newPoke.type2],
          }
          const createPoke = await axios.post("http://localhost:3001/pokemons", objNewPoke);
          return console.log(createPoke.data)
      } catch (error) {
          console.log(error)
      }
  }
}




