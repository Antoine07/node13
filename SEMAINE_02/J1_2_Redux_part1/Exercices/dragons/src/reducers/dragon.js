import { ADD_DRAGON, DELETE_DRAGON, SET_DRAGON, SHUFFLE } from "../constants/actions";

// initialisation des states : SOURCE DE VERITE
const stateInit = {
  dragons: ["Apalala", "Balaur", "Bolla"],
  dragon: "",
  age: "",
  count: 3,
  message: "",
};

const reducer = (state = stateInit, action = {}) => {
  let dragons, dragon;
  switch (action.type) {
    case SET_DRAGON:
      return {
        ...state,
        dragon: action.dragon,
      };

    case SHUFFLE:
      dragons = [...state.dragons];

      dragons.sort( _ => Math.random() - 0.5 )

      return {
        ...state,
        dragons,
      };

    case DELETE_DRAGON:
      dragons = [...state.dragons];

      return {
        ...state,
        dragons: dragons.filter((d) => d !== action.dragon),
      };

    case ADD_DRAGON:
      dragon = state.dragon.trim();

      if (state.dragons.includes(dragon))
        return {
          ...state,
          message: `Attention ce dragon : ${dragon} existe déjà`,
        };

      if (dragon === "")
        return {
          ...state,
          message: `Attention votre champ est vide`,
        };

      return {
        ...state,
        dragons: [...state.dragons, dragon],
        message: "",
        dragon: "",
      };

    default:
      return state;
  }
};

export default reducer;
