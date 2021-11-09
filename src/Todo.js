import react, { useState } from "react";
import React from "react";
import Display from "./Display";
function Todo(props) {
  const [todos, setTodos] = useState([]);
  const [currentItem, setCurrentItem] = useState({ text: "" });
  const [editIndex, setEditIndex] = useState(true);
  const [isEdit, setIsEdit] = useState(false);

  const handleInput = (e) => {
    setCurrentItem({
      text: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (isEdit === true) {
      let currentValue = [...todos];
      currentValue.splice(EditId, 1, currentItem.text);
      console.log("currentValue", currentValue);
      setIsEdit(false);
    } else {
      let arr = [...todos];
      arr.push(currentItem.text);
      setTodos([...arr]);
      console.log("arr", arr);
    }
  };

  const getIndex = (index) => {
    console.log("getIndex", index);
    let currentTodo = [...todos];
    currentTodo.splice(index, 1);
    setTodos([...currentTodo]);
  };

  const editItem = (index) => {
    setIsEdit(true);
    let editTodo = todos[index];
    setCurrentItem({ text: editTodo });
  };
  console.log(currentItem.text, "a");
  return (
    <div>
      <input type="text" value={currentItem.text} onChange={handleInput} />
      <button type="submit" onClick={() => handleSubmit(currentItem.text)}>
        Add
      </button>
      <Display todos={todos} getIndex={getIndex} editIndex={editItem} />
    </div>
  );
}
export default Todo;
