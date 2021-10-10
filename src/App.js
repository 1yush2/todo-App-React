import React from "react";
import Form from './components/form';

function App() {
/*   const initialValue = [
    "Star Wars", "Return of the Jedi", "Empire Strikes Back",
  ]
  
  const [ movies, setMovies ] = useState(initialValue); */

  return (
    <div className="App">
      <Form />
   {/*    {movies.map((movie) => {
       return <div key={movie}>{movie}</div>;
     })} */}
    </div>
  );
}

export default App;
