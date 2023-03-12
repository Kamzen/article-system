import Login from "./Pages/Auth/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Pages/Auth/Register";
import TodoList from "./Pages/TodoList";
import NewTodoList from "./Pages/NewTodoList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<TodoList />} />
        <Route path="/todolist" element={<NewTodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
