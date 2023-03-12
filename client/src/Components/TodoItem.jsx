import React from "react";

const TodoItem = ({ todo, handleDelete, handleDone }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width: "40%",
      }}
    >
      <div
        style={{
          flexGrow: 1,
          border: "1px solid lightgray",
          margin: 0,
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
        }}
      >
        <input
          type="checkbox"
          checked={todo.done}
          onClick={(e) => {
            handleDone(todo);
          }}
        />
      </div>
      <p
        className="text"
        style={{
          flexGrow: 7,
          border: "1px solid lightgray",
          margin: 0,
          minHeight: "40px",
          maxHeight: "w00px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "10px",
          fontWeight: "bolder",
          borderRadius: 0,
        }}
      >
        {todo?.done ? (
          <s style={{ color: "red" }}>{todo?.label}</s>
        ) : (
          <span>{todo?.label}</span>
        )}
      </p>
      <button
        className="btn btn-danger fw-bolder"
        style={{
          flexGrow: 2,
          margin: 0,
          height: "40px",
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          textTransform: "uppercase",
        }}
        onClick={() => {
          handleDelete(todo);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
