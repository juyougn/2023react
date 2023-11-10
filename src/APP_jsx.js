import { useState } from 'react';
import logo from './logo.svg';


function App() {

const han = "안녕하세요"
let [listData,setListData] = useState(1)
  

  return (
    <div className="App">

      <div>{listData}</div>  

      <button onClick={() => {setListData(listData +1)}}>click</button>

      <div></div>

    </div>
  );
}

export default App;
