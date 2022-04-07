const middlewareLog = store => next => action => {

    // l'action est faites et les reducers sont mis à jour
    const returnAction = next(action);

    if (action.type === "SET_LOG") {
        // action est faites dans le reducer logs 
      const { logs } = store.getState().log;

      console.log("MIDDLEWARE", logs);

      if(logs[logs.length - 1 ] > 0.5 )
         store.dispatch({ type : "SET_COUNT", count : 1 })
    }
  
    
  
    return returnAction; // ici on continue sur les actions dispatcher 
  }
  
  export default middlewareLog;