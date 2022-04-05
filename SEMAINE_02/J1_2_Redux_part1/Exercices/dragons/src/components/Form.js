import { useSelector, useDispatch } from "react-redux";
import { ADD_DRAGON, SET_DRAGON } from "../constants/actions";

function Form() {
  const { dragon, message } = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleChange(e){
    const { name, value } = e.target;

    dispatch({ type : SET_DRAGON , [name] : value })
  }

  function handleSubmit(e){
    e.preventDefault();
    dispatch({ type : ADD_DRAGON});
  }

  return (
    <>
      { message !== '' && (
        <p>{message}</p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="dragon"
            className="form-control"
            value={dragon}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </>
  );
}

export default Form;
