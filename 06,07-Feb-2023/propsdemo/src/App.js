import Movies from "./Movies";
import User from "./User";

function App(){

  const movie = [{
    name:"first movie",
    runtime: "152min"
  },
  {
    name:"second movie",
    runtime: "120min"
  },
  {
    name: "third movie",
    runtime:"145min"
  }]

  const token = "1234567890";

  return(
    <div className ="App">
      {/* <Movies movieslist={movie}></Movies> */}
      <User token = {token} ></User>
    </div>
  );
}
export default App;