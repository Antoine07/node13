

const stateInit = {
    count: 0
}

const reducer = (state = stateInit, action = {}) => {

    switch (action.type) {

        case "SET_COUNT":

            return {
                ...state,
                count : state.count + 1
            }

        default:
            return state;
    }
}

export default reducer;