import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
// import HelloWorld from "./Hello-World/HelloWorld.jsx";
// import Todolist from "./Todolist-todo/Todolist.jsx";
// import Todo from "./Todolist-todo/Todo.jsx";
// import Siswahadir from "./Todolist-todo/Siswahadir.jsx";
// import MenuMakan from "./Todolist-todo/Menumakan.jsx";
import Table from "./Pure-Function/Table.jsx";
import Row from "./Pure-Function/Row.jsx";
import Alertbutton from "./Button/Alertbutton.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <HelloWorld /> */}
    {/* <Todolist /> */}
    {/* <Todo />
    <Siswahadir/>
    <MenuMakan/> */}
    <Table/>
    <Row/>
    <Alertbutton text="Coba pencet" message="Noh kan, berubah" />
  </StrictMode>
);
