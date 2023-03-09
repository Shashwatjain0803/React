
function Products(){

    var Product = {
        pid: "001",
        name: "sj"
    }

    return(
        <div>
            <h1> Products </h1>
            <h1>{Product.pid}{Product.name}</h1>
        </div>
    )

}

export default Products;