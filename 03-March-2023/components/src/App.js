import logo from './logo.svg';
import './App.css';
import Movies from './Movies';
import Products from './Products';
import Login from './Login';
import LoginFbased from './LoginFbased';

function App() {
  return (
    <div className="App">
     <h1> App component</h1>
     {/* <Movies></Movies>
     <Products></Products> */}
     <Login></Login>
     <LoginFbased></LoginFbased>
    </div>
  );
}

export default App;
