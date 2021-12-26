import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.production.min';
import { useState } from 'react';
import {BrowserRouter as Router  ,Routes , Route ,Link}  from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Error from './pages/Error';
import Axios  from 'axios';
import Weather from './pages/Weather';
import FreeBoard from './pages/FreeBoard';

// 리턴문 html태그에 들어가는 요소들은 다 카멜표기법으로 작성해야됨
// 기본적으로 function에 return으로 구성되어있음ç
// function내부에 사용할 변수생성해서 써야됨 useState를 써야 그값이 바뀔때마다 랜더링이 다시됨
function App(){
  const [apis,setApis] = useState("");

  // title은 변수명이고 titleChange는 변수변경함수
  let [title, titleChange] = useState(['가','나','다']);
  //axios 예제
  const getApi = () => {
    // 엑시오스를 통한 예제
    // Axios.get("https://jsonplaceholder.typicode.com/todos/1").then(
    // (response) => {
    //   console.log(response);
    //   setApis(response.data.title+"..." + response.data.id);      
    // }
    // );

    fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (response) => response.json()).then((data) => {
           console.log(data);
      setApis(data.title+"..." + data.id);    
    }) 

    };
  // 값을 바꾸는기능추가
  function titleSwitch(){
    // ...하면 깊은복사 값을공유하지않고 별개의값임
    let newArray = [...title];
    newArray[0] = 'A';
    titleChange(newArray);
  }
  //  우측변경함수쓰면 값이바뀜 이게 리액트기본적인 값변경
  let [goodNum,goodNumChange] = useState(0); 

    return (
      // 리액트 기본예제
      // <div className="nav">
      // <button onClick={titleSwitch}>값변경버튼</button>
      // <Myname name="준준"/>
      // <div className="list" onClick={()=>{goodNumChange(goodNum+1)}}>{title[0]}</div>
      // <div className="numberUp">현재숫자 : {goodNum}</div>
      // <NumberUp></NumberUp>
      // </div>

      //기본라우팅 기능   주소에 :username은 동적으로 주소를받음 프로필/{사람이름}
      //   라우트는 해당페이지를 가면 그기능을 보여주는 기능
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
          {/* <div>API예제임<button onClick={getApi}>API EXAM</button></div>
          apis: {apis} */}
        </nav>

        <Routes>
          <Route path="/" element={<Home/>}  />
          <Route path="/about" element={<About/>} />
          <Route path="/profile/:username" element={<Profile/>}  />
          <Route path="/weather" element={<Weather/>}/>
          <Route path="/board" element={<FreeBoard/>}/>
          <Route path="*" element={<Error/>} />
        </Routes>
        <div>Footer</div>
      </Router>
      
      );
}

// 외부에 컴포넌트단위로 funtion으로 할수있음   상위 컴포넌트가 쓰는 데이터쓰려면 Props 를 이용해야댐
function NumberUp(){
return (
  <div>컴포넌트임</div>
);

}




export default App;
