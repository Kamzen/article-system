import React from "react";

export default function NewTodoItem({ todo, setTodo, handleDelete }) {
  return (
    <div
      style={{
        display: "flex",
        height: "40px",
        border: "1px solid red",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input type="checkbox" />
      <p
        style={{
          display: "flex",
          width: "300px",
          height: "40px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {todo}
      </p>
      <button
        onClick={handleDelete}
        style={{ width: "150px", height: "40px", color: "red" }}
      >
        Remove
      </button>
    </div>
  );
}
