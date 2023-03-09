import logo from './logo.svg';
import './App.css';
import Movies from './Movies';

function App() {

  const getMovies=(movie)=>{
    console.log("movie" , movie);
  }
  return (
    <div className="App">

      <Movies onSetMovies ={
        (h)=>getMovies(h)
      }></Movies>
    </div>
  );
}

export default App;
