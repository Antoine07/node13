import Input from "../Styles/Input";
import Button from "../Styles/Button";
import { useSelector, useDispatch } from "react-redux";
import { calcul, setNumber } from "../actions/actions-types";

function Denomination() {
  const { number, tokens } = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleSumbit(e) {
    e.preventDefault();

    dispatch(calcul())
  }

  function handleChange(e){
    const { name, value } = e.target;

    dispatch(setNumber(value))
  }

  return (
    <div className="App">
      <form onSubmit={handleSumbit}>
        <p>
          <label>Number: </label>
          <Input name="number" value={number} onChange={handleChange} />
        </p>
        <Button>Calcul</Button>
      </form>
      {tokens && (
        <ul>
        {tokens.map( (token, i) =>(<li key={i}>{token.value} quantity {token.quantity}</li>) )}
        </ul>
      )}
    </div>
  );
}

export default Denomination;
