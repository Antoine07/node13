# Jeu de dé

## Contraintes

Vous allez créer une petite application en React. Vous utiliserez Redux. Pour les styles vous utiliserez styled-components.

Vous organiserez les dossiers et fichier comme suit :

```txt
src/
    components/
        ...
    constants/
        ...
    actions-types/
        ...
    middlewares/
        log.js
    reducers/
        yam.js
        history.js
        index.js
    components/
        Home.js
        Statistic.js
App.js
```

Le middleware log.js permettra d'enregistrer chaque log du jeu, en notant les résultats et la date précise du lancer et ses statistiques.

## Contexte

Vous créez un bouton qui lance trois dés et compte le nombre de fois que l'on obtient des brelans, brelan = trois dés identiques; à chaque fois que l'on relance l'expérience on ré-initialise le compteur, il faut faire un grande nombre de fois cette expérience pour avoir des statistiques sur la chance d'obtenir un certain type de brelan. Vous devez rendre explicite ce fait dans l'application.

L'application possède 2 pages distinctes : la page Home qui permet de lancer l'expérience et une page permettant de consulter les statistiques et une page optionnelle qui récupère les statistiques enregistrées dans un fichier JSON (à la main) sur un dépôt GitHub (raw).

## Page Home le jeu

Sur cette page vous avez un bouton pour lancer les dés aux nombres de 3. Un autre champ du formulaire permet de définir le nombre de fois que vous répétez l'expérience. Pour consuler les résultats un lien cliquable permet de voir la page des statistiques. Vous utiliserez les paramètres de react-router-dom de route pour afficher les résultats.

```txt
[Jeu] [Résultat]

Nombre d'expérience : [100]

[Lancer]

```

## Page statistiques

Sur cette page vous afficherez l'ensemble des statistiques, ensemble des lancers, et essayerez d'expliciter la tendance d'obtenir un brelan spécifique (facultatif).

Ajoutez également un bouton pour ré-initialiser les statistiques.

N'oubliez pas d'utiliser le middleware log afin d'enregistrer l'ensemble de vos résultats.

## Page d'enregistrement (facultative)

Découverte et mise en place d'un middleware spécifique pour la gestion de fonctions dispatchées de manière asynchrone dans votre reducer.

Créez une page sur GitHub permettant de récupérer les statistiques avec axios en utilisant un useRef ou directement dans votre reducer, attention si vous utilisez le reducer pour récupérer cette source, vous devez utiliser le middleware thunk, voir les indications ci-dessous.

### Middleware thunk

Les actions sont dispatchées de manière synchrone dans le reducer. Pour pouvoir gérer des actions asynchrones on doit installer le module thunk qui est un middleware. Il permettra de gérer l'asynchrone des actions dans le reducer.

Imaginons la problématique suivante dans le fichier actions-types.js :

```js
const COUNTER = 'COUNTER';

// Cette action est synchrone
export const  set_counter = payload => {
  return {
    type: COUNTER, payload
  };
}

// Cette action est asynchrone (...)
export const startCounter = () => {

   return dispatch => {
        setInterval(() => {
        dispatch(set_counter(1)); // Ici on dispatch une action asynchrone => Redux ne sait pas le faire nativement (...)
        }, 1000);
  };
}
```

Dans la partie bootstrap de React pour configurer thunk et log un autre middleware voyez l'indication suivante :

```js
import thunk from 'redux-thunk';

import reducer from './reducers/index'; // on récupère dragon & log
import middlewareLog from './middlewares/log';

const store = createStore(reducer, applyMiddleware(middlewareLog, thunk));
```




