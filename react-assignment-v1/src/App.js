import "./App.css";
import { useState, useEffect } from "react";
import TodoCard from "./TodoCard";

const App = () => {
  // state untuk menyimpan data
  const [data, setData] = useState(null);
  // state untuk menyimpan status loading
  const [isloading, setIsloading] = useState(true);

  // useEffect akan dijalankan ketika komponen pertama kali di-mount
  useEffect(() => {
    // fetch data dari API
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      // ubah response menjadi JSON
      .then((response) => response.json())
      // simpan data ke dalam state
      .then((json) => {
        // set data
        setData(json);
        // set loading menjadi false
        setIsloading(false);
      });
  });

  //   if (loading) return <h1> Loading... </h1>;

  function result(todo) {
    let id = todo.id;
    let title = todo.title;
    let status = todo.completed;

    return (
      <TodoCard
        id={id}
        title={title}
        status={status ? <p>Completed</p> : <p>Not Completed</p>}
      ></TodoCard>
    );
  }

  // jika data sudah ada, tampilkan data
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="container">
        {isloading ? <h1>Loading...</h1> : data.map(result)}
      </div>
    </div>
  );
};

export default App;
