import React, { useState } from "react";
import './App.css';
import Form from './components/form';

function App() {
  const initialValue = [
    "Star Wars", "Return of the Jedi", "Empire Strikes Back",
  ]
  
  const [ movies, setMovies ] = useState(initialValue);
  return (
    <div className="App">
      <h1>My To Do list</h1>
      <Form />
      {movies.map((movie) => {
       return <div key={movie}>{movie}</div>;
     })}
    </div>
  );
}

export default App;
