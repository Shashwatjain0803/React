import React from "react";
class Movies extends React.Component{

    movie = {
        name: "some movie",
        runtime: "155min",
        releasedate : "15march 2023"
    }
    render(){

        return(
            <div>
                <h1>MOvies component</h1>
                <h1>{this.movie.name}{this.movie.runtime}{this.movie.releasedate}</h1>
            </div>
        )
    }
}

export default Movies;