import { useSelector, useDispatch } from "react-redux";
import { setDenomination } from "../actions/actions-types";
import Input from "../Styles/Input";

function Home() {
  const { denominations, denomination:indice} = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleChange(e){
    const { name, value } = e.target;

    dispatch(setDenomination(value));
  }

  return (
    <div className="App">
      <p>Dénomination par défaut {denominations[indice].join(', ')}</p>
      <form>
        {denominations.map((d, i) => (
          <p key={i}>
            <label>{ d.join(', ') }</label>
            <Input onChange={handleChange} type="radio" name="denomination" value={i} />
          </p>
        ))}
      </form>
    </div>
  );
}

export default Home;
