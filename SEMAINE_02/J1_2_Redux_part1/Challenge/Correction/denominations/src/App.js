import Button from './Styles/Button';

function App() {

  function handleClick(e) {
    console.log(e);
  }

  return (
    <div className="App">
      <Button onClick={handleClick}>Hello</Button>
    </div>
  );
}

export default App;
