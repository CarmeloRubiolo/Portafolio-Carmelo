import React from "react";
import "./Home.css"

const Home = () => {
    return (
        <>
        <div className="container-flex mt-5 grid gap-5">
            <div>
                <div className="saludo mb-3">
                    <h1>Hola, soy Carmelo</h1>
                </div>
                <div>
                    <p className="text-center mb-4 animacion-txt">Programador Front-end</p>
                    <div className="container-btn">
                        <button className="cssbuttons-io-button"> Contactarme
                            <div className="icon">
                                <svg className="" height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                            </div>
                        </button>
                    </div>   
                </div>
            </div>
            <div>
                <img className="img-personal" src="../../imagenes/anonimo.png" alt="imagen-personal"/>
            </div>
        </div>
            
        </>
    )
}

export default Home