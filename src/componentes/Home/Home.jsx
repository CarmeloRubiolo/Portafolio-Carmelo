import "./Home.css"

const Home = () => {
    return (
        <>
        <div className="container-flex grid gap-5">
            <div className="">
                <div className="saludo">
                    <h1>Hola, soy Carmelo</h1>
                </div>
                <div>
                    <p>Programador Front-end</p>
                </div>
            </div>
            <div>
                <img className="img-personal" src="../../imagenes/anonimo.png"/>
            </div>
        </div>
            
        </>
    )
}

export default Home