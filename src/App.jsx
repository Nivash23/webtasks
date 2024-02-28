import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "../components/card";

import React from "react";

function App() {
  const [datas, setDatas] = useState({
    name: "",
    Description: "",
  });
  const [status, setStatus] = useState();
  const [name, setName] = useState();
  const [todolist, setTodolist] = useState([]);
  const [status1, setStatus1] = useState();

  const formhandler = () => {
    todolist.push(datas);
    setDatas({
      name: "",
      Description:""
    })
  };

  const todo = todolist.find(todo => todo.name == name);
  if (todo)
  {
    todo.status = status;
    console.log(todo)
  }
  

  return (
    <div id="container">
      <h2 id="head">My todo</h2>
      <div id="userInteraction">
        <div>
          
        <input
          id="name"
          type="text"
          value={datas.name}
          onChange={(e) => {
            setDatas({ ...datas, name: e.target.value });
          }}
          placeholder="Todo Name"
        />
        </div>
        <div>

        <input
          id="descript"
          type="text"
          value={datas.Description}
          onChange={(e) => {
            setDatas({ ...datas, Description: e.target.value });
          }}
          placeholder="Todo Description"
        />
        </div>
        <div>

        <button  onClick={formhandler} id="add">
          Add Todo
        </button>
        </div>
      </div>
      <div id="datas">
        <h4>
          Status :
          <span>
            <select onChange={(e) => {
              setStatus1(e.target.value)
            }}>
              <option className="choice"></option>
              <option className="choice">completed</option>
              <option className="choice">Not completed</option>
            </select>
          </span>
        </h4>
              <h4 id='todohd'>My todos</h4>
      </div>
        <div>
          <ul id="cards">
            {todolist.map((todo, i) => (
              <li key={i}>
                <Card name={todo.name} description={todo.Description} setStatus={setStatus} setName={setName} />
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
}

export default App;
