import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Denomination from './components/Denomination';
import Home from './components/Home';
import Nav from './components/Navigate';

function App() {


  return (
    <BrowserRouter>
    <Nav />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="denomination" element={<Denomination />} />
    </Routes>
</BrowserRouter>
  );
}

export default App;
