import { DENOMINATION, SET_DENOMINATION, SET_NUMBER, CALCUL } from "../constants/actions";

export const denomitation = () => {
    return {
        type: DENOMINATION
    }
};

export const setDenomination = payload => {
    return {
        type: SET_DENOMINATION, payload
    }
};

export const setNumber = payload => {
    return {
        type: SET_NUMBER, payload
    }
};

export const calcul = () => {
    return {
        type: CALCUL
    }
};

export const tokens = (number, denomination) => {
    denomination.sort((n1, n2) => n2 - n1);
    const tokens = [];

    for(const d of denomination){

        // si le nombre est supérieur ou égale à la dénomination on divise par d pour avoir le nombre de "d" contenu dans notre nombre
        // il faudra cependant récupérer le reste après division, ce que l'on fait avec un modulo
        if(number >= d ){
            const quantity = Math.floor( number / d  );

            // les crochets permettent d'avoir le nom de la valeur en clé du littéral
            tokens.push({ value : d , quantity  });

            number = number % d ;
        }
    }

    return tokens;
}
