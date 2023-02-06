import React from "react";
import "./list.css";
import { useState, useEffect } from "react";

function List() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((resData) => setData(resData))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  return (
    <div className="list">
      <h1>Fetched Data From JSON Place Holder</h1>
      <table>
        <thead>
          <tr>
            <th>Userid</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.title}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
