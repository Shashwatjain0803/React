import React from "react";

class Counter extends React.Component{

    constructor(){
        console.log("constructor called")
        super();

        this.state = {
            counter:0
        }
    }
    updatestate = () =>{ 
        this.setState({
            counter:this.state.counter + 1
        })
    
    }
    componentDidMount() {
        console.log("component did mount is  called");
    }
    componentDidUpdate(){
        console.log("component did update is called");
    }
            render(){
        console.log("render called")
        return( 
            <div>
                <h1 onClick={this.updatestate}>
                    The current count is{this.state.counter}
                </h1>
                <h1>the count of users in counter component is {this.props.users.length}</h1>
            </div>
        )
    }
}

export default Counter;