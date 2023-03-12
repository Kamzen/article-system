import React, { useState } from "react";
import NewTodoItem from "../Components/NewTodoItem";

const NewTodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);

  const handleSubmit = () => {
    setTodo((prevState) => [...prevState, inputValue]);
  };

  const handleDelete = (index) => {
    const removed = todo.filter((i) => i !== index);

    setTodo([removed]);
  };

  return (
    <div
      style={{
        flexDirection: "column",
        display: "flex",
        width: "100%",
        border: "1px solid black",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: "20px",
        boxSizing: "border-box",
        gap: "20px",
      }}
    >
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Add To Do"
          style={{
            width: "300px",
            height: "40px",
            borderRadius: "5px",
            borderColor: "blue",
          }}
        />
        <button
          onClick={handleSubmit}
          style={{
            height: "40px",
            width: "150px",
            backgroundColor: "gray",
            borderRadius: "5px",
          }}
        >
          Add
        </button>
      </div>
      {todo.map((todos, index) => {
        return (
          <NewTodoItem
            key={index}
            todo={todos}
            setTodo={setTodo}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default NewTodoList;
