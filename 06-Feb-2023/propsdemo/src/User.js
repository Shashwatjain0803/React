import Changepassword from "./Changepassword";
function User(props){

    return(


        <div>
            <h1>user component</h1>

            {props.token}
            <Changepassword token = {props.token} ></Changepassword>
        </div>
    )
}

export default User;