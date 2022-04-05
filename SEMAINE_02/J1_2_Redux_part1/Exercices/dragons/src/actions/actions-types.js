import { DELETE_DRAGON, SHUFFLE, UPPER_LOWER } from "../constants/actions";

export const deleteDragon = payload => {
    return {
        type: DELETE_DRAGON, payload
    }
};

export const shuffle = () => {
    return {
        type: SHUFFLE
    }
};

export const toggleUpperLower = () => {
    return {
        type: UPPER_LOWER
    }
};