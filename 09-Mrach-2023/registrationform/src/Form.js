import { useState } from "react";
import User from "./User";
function Form(props) {
    const [LoginForm, SetLoginForm] = useState({
        username: '',
        password: '',
        email: '',
        phonenumber: ''
    })
    const updateData = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        //this.state.username = value; //({username : value});
        SetLoginForm({ ...LoginForm, [name]: value });
    }
    const submit = (event) => {
        event.preventDefault();
        console.log(LoginForm);
    }
    props.onSetMovies(useState);
    var token = useState;
    return (
        <div>
            <h1>Registration Here</h1>

            <form>
                <input type="text" onChange={updateData} name="username" placeholder="user name"></input><br></br><br></br>
                <input type="text" onChange={updateData} name="password" placeholder="password "></input><br></br><br></br>
                <input type="text" onChange={updateData} name="email" placeholder="email"></input><br></br><br></br>
                <input type="text" onChange={updateData} name="phonenumber" placeholder="phone number"></input><br></br><br></br>
                <button onClick={submit}>Login</button>
            </form>
            {/* <User token = {token}></User> */}
        </div>
    )
}
export default Form;