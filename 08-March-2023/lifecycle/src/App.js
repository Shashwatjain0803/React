import { useState } from 'react';
import './App.css';
import Counter from './Counter';

function App() {

  const[users , setusers] = useState(["user1","user2","user3"]);

  const addusers =()=>{
    var user = "users" + (users.length +1);
    setusers(users.concat(users));
  }

  return (
    <div className="App">
      <button onClick={addusers}> Add users</button>
      <h1>the count of users in app component is {users.length}</h1>
      <Counter users ={users}></Counter>
    </div>
  );
}

export default App;
