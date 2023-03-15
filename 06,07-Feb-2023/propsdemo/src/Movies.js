
function Movies(props){
    console.log(props)
    return(
        <div>
            <h1>Movies Component</h1>
            {props.movieslist[0].name}
            {props.movieslist[0].runtime}<br></br>
            {props.movieslist[1].name}
            {props.movieslist[1].runtime}<br></br>
            {props.movieslist[2].name}
            {props.movieslist[2].runtime}
        </div>
    )
}

export default Movies;