import React, { useState, useEffect} from "react";
import { Link, useHistory } from 'react-router-dom';
 
function TodoList() {
  const [forecasts, setforecast] = useState([]);
  const [loading , setloading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch('todo');      
      const data = await response.json();
      console.log(data)
      setforecast(data);
      setloading(false);
    };

    fetchArticle();

  }, []);

  function handleDelete(e) {
      forecasts.splice(e.target.value , 1);
      console.log(forecasts);
      setforecast(forecasts);
      history.push('/');
  }

  return (
    <div>
      <h1>Todo List</h1>
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>내용</th>
            <th>날짜</th>
            <th>작성자</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((forecast , index) => (
            <tr key={forecast.date}>
              <td>{forecast.detail}</td>
              <td>{forecast.date}</td>
              <td>{forecast.userName}</td>
              <td><button value={index} onClick={handleDelete}>삭제</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/todoForm">등록</Link>
    </div>
  );
}

export default TodoList;
