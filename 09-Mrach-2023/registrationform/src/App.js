import './App.css';
import Form from "./Form";
import User from './User';

function App(props) {

  const getresgitration=(useState)=>{
    console.log("usestate" , useState);
  }

  
  return (
    <div className="App">
      <Form onSetMovies ={
        (r)=>getresgitration(r)
      }></Form>
      {props.token}
      {/* <User token ={props.useState} ></User> */}
    </div>
  );
}

export default User;
