import logo from './logo.svg';


function App() {

const han = "안녕하세요"
  function test() {
    return 1000;
  }

  return (
    <div className="App">
      <div>{han}{test()}</div>  

    </div>
  );
}

export default App;
