import { tokens } from "../actions/actions-types";
import {
  CALCUL,
  DENOMINATION,
  SET_DENOMINATION,
  SET_NUMBER,
} from "../constants/actions";

// initialisation des states : SOURCE DE VERITE
const stateInit = {
  denominations: [
    [1, 5, 10, 20, 50, 100],
    [1, 2, 5, 10, 20, 30, 50],
    [1, 10, 20, 30, 40, 50, 100],
  ],
  denomination: 0,
  number: "",
  tokens: null,
};

const reducer = (state = stateInit, action = {}) => {
  switch (action.type) {
    case SET_DENOMINATION:
      return {
        ...state,
        denomination: parseInt(action.payload),
      };

    case SET_NUMBER:
      return {
        ...state,
        number: action.payload,
        tokens : null
      };

    case CALCUL:
      return {
        ...state,
        number: "",
        tokens: tokens(
          parseInt(state.number),
          state.denominations[state.denomination]
        ),
      };

    default:
      return state;
  }
};

export default reducer;
