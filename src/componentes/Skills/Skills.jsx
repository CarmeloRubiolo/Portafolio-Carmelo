import React, { useState, useEffect} from "react"
import "./Skills.css"


const Skills = () => {

    const [habilidad, setHabilidad] = useState([
        {
        "name": "ReactJS",
        "img": "../../imagenes/reactjs.png",
    },
    {
        "name": "NodeJS",
        "img": "../../imagenes/node-js.png",
    },
    {
        "name": "HTML",
        "img": "../../imagenes/html-5.png",
    },
    {
        "name": "CSS",
        "img": "../../imagenes/css-3.png",
        "range": "Senior"
    },
    {
        "name": "Bootstrap",
        "img": "../../imagenes/bootstrap.png",
        "range": "Senior"
    },
    {
        "name": "Javascrpit",
        "img": "../../imagenes/js.png",
        "range": "Senior"
    },
    {
        "name": "MongoDB",
        "img": "../../imagenes/mongodb.png",
        "range": "Senior"
    },
])



    return(
        <> 
        <h1 className="text-center mt-5">Skills</h1>
        <div className="container text-center">
                            <div className=" row">
                                
            {habilidad.map(hab => (
                <div className="mb-4 col-3">
                    <div className="card-skill">
                        <img className="p-3" src={hab.img}/>
                        <h3>{ hab.name } </h3>
                    </div>
                </div>      
            ))}
                </div>
            </div>   

        </>
    )
}

export default Skills