const { Router } = require('express');
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const types = require('./types.js');
const pokemons = require('./pokemons.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemons", pokemons);
router.use("/types", types);

router.get("/", (req, res) => {
    res.send("This is the index GET request")
});

module.exports = router;
