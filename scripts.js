const { listarPokemons } = require('utils-playground');
const { detalharPokemon } = require('utils-playground');

app.get('/pokemons', async (req, res) => {
    const { listarPokemons } = await listarPokemons('utils-playground');
    
})

app.get('/pokemons/:name', async (req, res) => {
    const { name } = req.params;
    
    const nomePokemon = await detalharPokemon('utils-playground');

    return res.send(nomePokemon);
})

app.get('/pokemons/:id', async (req, res) => {
    const { id } = req.params;
    
    const nomePokemon = await detalharPokemon('utils-playground');

    return res.send(nomePokemon);
})

app.listen(8080);