import { useDispatch, useSelector } from 'react-redux';

function App() {

  const { logs, count } = useSelector(state => ({logs : state.log.logs, count : state.count.count}));
  const dispatch = useDispatch();

  function handleLog(e){
    dispatch({ type: "SET_LOG", log : Math.random() })
  }

  return (
    <div className="App">
     <h1>Log</h1>
     <p>Combien de log : {count}</p>
     {logs.length > 0 && (
       logs.map((l,i) => <p key={i}>{l}</p>)
     )}
     <button onClick={handleLog}>add log</button>
    </div>
  );
}

export default App;
