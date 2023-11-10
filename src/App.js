import { useState } from 'react';
import logo from './logo.svg';
import './App.css'


function App() {

  let [data, setData] = useState(1)
  let [listData, setListData] = useState(['list1', 'list2', 'list3'])
  // 배열

  let [mView,setMView] = useState(false)
  let today = new Date();
  console.log(today);
  // 오브젝트
  let time = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    date: today.getDate()
  }
  return (
    <div className="App">

      <div>{data}</div>
      <button onClick={() => { setData(data + 1) }}>클릭</button>
      <br />
      {
        listData.map(function (item, i) {
          // 함수를 할땐 꼭 리턴을 적어주자 
          // map 포문처럼 돌면서 출력 되네 
          // 컴포넌트 를 적용하는 방법에 간단하게 알려줌 
          return (
            <>
              <div className='flex'>

                <div className='list'>{item}</div>
                <div>{time.year} / {time.month} / {time.date}</div>
              </div>
            </>
          )
        })
      }
      <button onClick={() => {setMView(!mView)}}>크으으릭릭</button>
      {
        mView == true ?  <Modal></Modal> : null
      }
     
    </div>
  );
}

function Modal() {
  // 1 함수 , 2 리턴, 3 꺽쇠
  return(
    <>
    <div className='modal'>
    <h3>제목</h3>
    <p>안녕하세요</p>
    짜으으으바 스크립트

    </div>

    </>
  )
}


export default App;
