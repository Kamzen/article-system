import React, { useEffect, useState } from "react";
import TodoItem from "../Components/TodoItem";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");

  const handleDelete = (todo) => {
    setTodoList((prevState) => {
      const newTodoList = prevState.filter((options) => {
        return options.id !== todo.id;
      });
      return newTodoList;
    });
  };

  const handleDone = (todo) => {
    setTodoList((preState) => {
      const newTodoList = preState.map((option) => {
        if (option.id === todo.id) {
          return { ...option, done: true };
        }
        return option;
      });

      return newTodoList;
    });
  };

  useEffect(() => {
    setTodoList(JSON.parse(localStorage.getItem("todoList")) || []);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        gap: "20px",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: "10px",
          width: "40%",
        }}
      >
        <input
          type="text"
          placeholder="Todo Item"
          className="form-control"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="btn btn-secondary fw-bolder"
          style={{ width: "230px", textTransform: "uppercase" }}
          onClick={() => {
            setTodoList((prevTodolist) => {
              const newTodoList = [
                ...prevTodolist,
                {
                  id: Math.random().toString(36).substring(2, 10),
                  label: input,
                  done: false,
                },
              ];
              localStorage.setItem("todoList", JSON.stringify(newTodoList));
              return newTodoList;
            });
            setInput("");
          }}
        >
          Add
        </button>
      </div>
      <p className="text fw-bolder" style={{ fontSize: "25px" }}>
        {todoList.length > 0 ? "Todo Listitems" : "No Todo Items"}
      </p>
      {todoList?.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleDone={handleDone}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
