const router = require('express').Router();
const { Pokemon, Type } = require("../db.js");
const APItypes = 'https://pokeapi.co/api/v2/type'
const axios = require('axios').default;

router.get('/', async (req, res) => {
    var listTypes = [];

    try{
        const pokeApi = await axios.get(APItypes);
        pokeApi.data.results.forEach((data) => listTypes.push(data.name));
        console.log(listTypes);


        listTypes.map( async (data)  => {
            await Type.create({
             name: data
            
        });
     });

    res.status(200).json(listTypes)

    }catch(e) {
        console.log(e);
    }
})


//debo traer id y nombre de cada type
/*GET /types:
Obtener todos los tipos de pokemons posibles
En una primera instancia deberán traerlos desde pokeapi y guardarlos
en su propia base de datos y luego ya utilizarlos desde allí*/

// router.get('/', getTypes)

module.exports = router;