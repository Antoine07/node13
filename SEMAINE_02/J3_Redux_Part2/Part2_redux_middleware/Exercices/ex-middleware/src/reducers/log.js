

const stateInit = {
    logs: []
}

const reducer = (state = stateInit, action = {}) => {

    switch (action.type) {

        case "SET_LOG":

            console.log('REDUCER LOG ', state.logs)

            return {
                ...state,
                logs : [ ...state.logs, action.log ]
            }

        default:
            return state;
    }
}

export default reducer;