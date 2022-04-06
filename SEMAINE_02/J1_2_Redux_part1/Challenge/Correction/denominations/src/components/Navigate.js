import { NavLink } from "react-router-dom";
// import Nav from "../Styles/Nav"; // TODO faire un styled pour gérer la navigation

const Navigate = (props) => {

  const checkIsactive  = ({ isActive }) => {
    return {
      display: "block",
      margin: "1rem 0",
      color: isActive ? "oragne" : "",
    };
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink style={checkIsactive} to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink style={checkIsactive} to="/denomination">Denomination</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigate;