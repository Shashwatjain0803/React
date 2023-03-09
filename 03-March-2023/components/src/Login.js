
import React from "react";
class Login extends React.Component{

    constructor(){
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    updateusername = (event)=>{
        var value =event.target.value;
        // this.state.username = value;
        this.setState({username:value});
    }

    updatepassword = (event)=>{
        var value =event.target.value;
        // this.state.password = value;
        this.setState({password:value});
    }

    submitform = (event) => {
        event.preventDefault();
        console.log(this.state)

    }
    render(){
        console.log("render")

        return(
    
            <div>
                <form>
                    <input type="text" onChange={this.updateusername} placeholder="username here" ></input> <br></br> <br></br>
                    <input type="text" onChange={this.updatepassword} placeholder="password" ></input><br></br> <br></br>
                    <button onClick={this.submitform}>login</button> <br></br>
                </form>

                {this.state.username}
            </div>
        )
    }
    
    
}

export default Login;