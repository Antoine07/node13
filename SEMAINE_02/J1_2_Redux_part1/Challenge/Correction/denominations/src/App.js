import { BrowserRouter, Route, Routes } from "react-router-dom";
import Denomination from "./components/Denomination";
import Home from "./components/Home";
import Nav from "./components/Navigate";
import GlobalStyle from "./Styles/Global";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="denomination" element={<Denomination />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
