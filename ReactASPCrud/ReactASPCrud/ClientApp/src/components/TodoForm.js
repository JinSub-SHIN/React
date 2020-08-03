import React, { useState } from "react";

const TodoForm = () => {

  const [name, setname] = useState();
  const [detail, setdetail] = useState();
  const [date, setdate] = useState();

  function handleSubmit(e) {

    if(name===undefined || detail===undefined || date===undefined){
        alert("입력값이 부족합니다");
        return;
    }

    e.preventDefault();
    console.log(name);
    console.log(detail);
    console.log(date);

  }

  function handleChange(e) {
    if (e.target.name === "name") {
        setname(e.target.value);
    }
    if (e.target.name === "detail") {
        setdetail(e.target.value);
    }
    if (e.target.name === "date") {
        setdate(e.target.value);
    }    
  }

  return (
    <div>
      TodoForm....
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} name="name" onChange={handleChange} />
        </label>
        <label>
          detail:
          <input type="text" value={detail} name="detail" onChange={handleChange} />
        </label>
        <label>
          date:
          <input type="text" value={date} name="date" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default TodoForm;
