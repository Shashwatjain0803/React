import { useState } from "react";
function LoginFbased(){

   const [Loginform , setLoginform] = useState({

        username:"",
        password:""
    })

    const updateusername = (event)=>{
        var value =event.target.value;
        // this.state.username = value;
        setLoginform({...Loginform,username:value});
    }

    const updatepassword = (event)=>{
        var value =event.target.value;
        // this.state.password = value;
        setLoginform({...Loginform,password:value});
   
    }
    const submitform = (event) => {
        event.preventDefault();
        console.log(Loginform)

    }
    return(

        
        <div>
            <form>
                <input type="text" onChange={updateusername} placeholder="username here" ></input> <br></br> <br></br>
                <input type="text" onChange={updatepassword} placeholder="password" ></input><br></br> <br></br>
                <button onClick={submitform}>login</button> <br></br>
            </form>

        </div>
    )
}

export default LoginFbased;