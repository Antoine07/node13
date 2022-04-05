import { useSelector, useDispatch } from "react-redux";
import { toggleUpperLower, deleteDragon, shuffle } from "./actions/actions-types";

import Form from "./components/Form";

function App() {
  const { dragons, count, toggle } = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleDelte(d) {
    console.log(d);
    dispatch(deleteDragon(d));
  }

  function handleShuffle(d) {
    dispatch(shuffle());
  }

  function handleToggle() {
    dispatch(toggleUpperLower());
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          Nombre de dragon : {count}
          <p>
          <button
            type="button"
            className="btn btn-warning"
            onClick={handleShuffle}
          >
            shuffle
          </button>
          </p>
          <p>
          <button
            type="button"
            className="btn btn-warning"
            onClick={handleToggle}
          >
            {toggle ? 'Upper' : 'Lower'}
          </button>
          </p>
          {dragons.length > 0 &&
            dragons.map((d, i) => (
              <div key={i}>
                <li>{d}</li>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelte(d)}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
        <div className="col-sm">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
