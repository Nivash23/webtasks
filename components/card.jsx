import React from "react";

function card({ name, description, setStatus,setName }) {
    const statushandler = (e) => {
        setStatus(e.target.value);
        setName(name)
    }
  return (
    <div>
      <div id="cardcontainer">
        <div class="row">
          <div class="row-2">
                      <div id='name'>Name    :{name }</div>
          </div>
          <div class="row-2">
                      <div id='des'>Description :{description }</div>
          </div>
          <div class="row-2">
            <div>
              status :
              <span>
                <select onChange={statushandler}>
                  <option className="choice"></option>
                  <option className="choice">completed</option>
                  <option className="choice">Not completed</option>
                </select>
              </span>
            </div>
          </div>
          <div id="buttons" class='row-3'>
            <button id="edit" type="button"> Edit</button>
            <button id="delete" type="button">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default card;
