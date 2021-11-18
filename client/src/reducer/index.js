const initialState = {
    pokemonAll: [],
    pokemonDetail:[],
    pokemonTypes: [],
    pokemonFilter: [],
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_POKEMONS':
        state.pokemonFilter = [];
        return {
            ...state,
            pokemonAll: action.payload
        }

        case'GET_POKEMON_NAME': 
        return{
            ...state,
            pokemonFilter: action.payload
        }

        case 'GET_POKEMON_DETAIL':
            return{
                ...state,
                pokemonDetail: action.payload
            }

        default:
        return state;
    }
};

export default reducer;