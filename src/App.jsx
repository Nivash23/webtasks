import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


import React from 'react'

function App() {
  const [name, setName] = useState(null);
  const [des, setDes] = useState(null);
  const [data, setData] = useState(false);
  function getName(val)
  {
    setName(val.target.value);
    
  }
  function getdescript(val)
  {
    setDes(val.target.value);
  }
    let user = document.getElementById('username');
  let descript = document.getElementById('description');
  let status = document.getElementById('status');
  let edt = document.getElementById('edit');
  let del = document.getElementById('delete');
  let card = document.getElementById('cards');
  let databs = document.getElementById('database');
    if (data)
    {
      user.textContent = `Name:${name}`;
      descript.textContent = `Description:${des}`  
      status.style.display = 'inline';
      del.style.display = 'inline';
      edt.style.display = 'inline';

      


      setData(false);
  }
  function setstatus1()
  {
    let stats = document.getElementById('sts');
    stats.innerText = `completed`;

  }
  function setstatus2()
  {
    let stats = document.getElementById('sts');
    stats.innerText = `status : Not completed`;

  }
  
  // let name = document.getElementById('name');
  // let description = document.getElementById('descript');
  // let todoname = name.value;
  // let tododescript = description.value;
  return (
    <div id='container'>

     <h2 id='head'>My todo</h2>
      <div id='userInteraction'>
        <input id='name' type="text" onChange={getName}  placeholder="Todo Name"/>
        <input id='descript' type="text" onChange={getdescript}  placeholder="Todo Description" />
        
        <button type="submit" onClick={()=>setData(true)}>Add Todo</button>
      </div>
     <div id='datas'>
        <h4>My todos</h4>
        <h4>Status :<span>
          <select>
            <option>All</option>
            <option>completed</option>
            <option>Not completed</option>
          </select>
        </span>
       
        </h4>
        <ul id='cards'>
          <li>

        <div id='database'>
          <p id='username'></p>
         <p id='description'></p>
              <div id='status'>status: <span>
                
                <select>
                  
                
              <option></option>  
              <option>completed</option>  
              <option>Not completed</option>  
         </select>
              </span></div>
         <div id='buttons'>
           <button id='edit'  type='button'>Edit</button>
                <button id='delete' type='button'>Delete</button>
         </div>
       </div>
          </li>
        </ul>
      </div>
    </div>

  )
}

export default App
