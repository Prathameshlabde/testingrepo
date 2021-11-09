import React, { useState } from "react";
import "./App.css";

function Display(props) {


  const removeItem = (index) => {
    console.log("index", index);
    props.getIndex(index);
  };

  const editItem = (index) =>{
    console.log("index", index)
    props.editIndex(index);
  }

  //console.log("props", this.props.todos);
  return (
    props.todos.length > 0 &&
    props.todos.map((todos, index) => (
      <div>
      <h1 onClick={() => removeItem(index)}>
        {index + 1}
        {todos}
      </h1>
      <button onClick ={()=>editItem(index)}>edit</button>
      </div>
    ))
  );
}
export default Display;
