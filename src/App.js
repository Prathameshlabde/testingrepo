import logo from './logo.svg';
import './App.css';
import Helloworld from './helloworld';
import ClassHello from './classhello';
import Cons from './cons';
import Message from './message';
import Todo from './Todo';
import React, { useState, useEffect } from 'react';
function App() {
  return (
    <div className="App">
      
      <Todo/>
      {/* <Example/> */}
    </div>

  );
}

export default App;


function Example() {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);


  useEffect(() => {
    console.log("first counter");
    document.title = `You clicked ${count} times`;
    countChagnge()

  },[count]);

  const countChagnge = ()=>{
    console.log("count chnage called")
  }

  useEffect(() => {
    console.log("second counter");
    document.title = `You clicked ${secondCount} times`;
  },[secondCount]);



  return (
    <div>
      <p>You clicked first counter {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click first count
      </button>

      <p>You clicked second counter {secondCount} times</p>
      <button onClick={() => setSecondCount(secondCount + 1)}>
        Click second coun
      </button>


    </div>
  );
}