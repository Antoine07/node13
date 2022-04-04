import { useSelector, useDispatch } from "react-redux";

function App() {
  const { dragons, count } = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(dragons);

  function handleClick(e) {
    dispatch({ type: "COUNT" });
  }

  return (
    <div>
      <button onClick={handleClick}>Count + 1</button>
      <p>{count}</p>
    </div>
  );
}

export default App;
