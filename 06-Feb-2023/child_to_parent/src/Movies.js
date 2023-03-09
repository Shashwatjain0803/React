function Movies(props){

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

      props.onSetMovies(movie);
    return(

        <div>
            <h1>
                All movies component
            </h1>
        </div>
    )
}

export default Movies;