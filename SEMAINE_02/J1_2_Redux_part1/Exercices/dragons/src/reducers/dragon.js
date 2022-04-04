
// initialisation des states : SOURCE DE VERITE
const stateInit = {
    dragons: [
        "Apalala",
        "Balaur",
        "Bolla"
    ],
    dragon: '',
    age: '',
    count: 3,
    message: '',
}

const reducer = (state = stateInit, action = {}) => {

    switch (action.type) {

        case 'COUNT':

            return {
                ...state,
                count : state.count + 1
            }

        default:
            return state;
    }


}

export default reducer;