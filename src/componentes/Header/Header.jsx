import React, { useState } from 'react';
import styled from 'styled-components'
import Burguerbutton from '../BurgerButton/BurgerButton'
import './Header.css'

function Navbar () {
const [clicked, setClicked] = useState(false)
const handleClick = () => {
    setClicked(!clicked)
}


return (
    <>
            <NavContainer>
            <div className="container-redes">
                <img src="../../imagenes/linkedin.png" alt="linkedin"/>
                <img src="../../imagenes/twitter.png" alt="twitter"/>
                <img src="../../imagenes/github.png" alt="github"/>
            </div>
            <div className={`menu ${clicked ? 'active' : ''}`}>
                <a href="#" onClick={handleClick}>Inicio</a>
                <a href="#" onClick={handleClick}>Acerca</a>
                <a href="#" onClick={handleClick}>Skills</a>
                <a href="#" nClick={handleClick}>Estudios</a>
                <a href="#" onClick={handleClick}>Portafolio</a>
                <a href="#" onClick={handleClick}>Contacto</a>
            </div>
            <div className="burguer">
                <Burguerbutton clicked={clicked} handleClick={handleClick}/>
            </div>
            </NavContainer>
            <BgDiv className={`initial ${clicked ? 'active' : ''}`}/>
    </>
)
}

export default Navbar
const NavContainer = styled.nav`
.container-redes img{
    height: 30px;
    margin-left: 10px;
    cursor: pointer;
    
}
    padding-top: 15px;
    background-color: #050915;
    display:flex;
    align-items: center;
    justify-content: space-around;
a{
    color: rgb(209, 206, 206);
        text-decoration: none;
        margin-right:1rem;
    }
.menu{
    position:absolute;
    left:-1000px;
    margin-left:auto;
    margin-right:auto;
    text-align: center;
    transition: all .5s ease;
    a{
        color: rgb(209, 206, 206);
        font-size:2rem;
        display:block;
    }
    @media(min-width: 768px){
        position:initial;
        margin:0;
        a{
            font-size: 1rem;
            display: inline;
        }
    }
}
.menu.active{
    width:100%;
    display:block;
    position:absolute;
    margin-left:10px;
    margin-right:auto;
    top:10%;
    left:0;
    text-align:left;
    z-index:99;
    a{
        font-size: 1.2rem;
        color: #050915;
        margin-top: 20px;
    }
}
.burguer{
    @media(min-width: 768px){
        display:none;
    }
}

`

const BgDiv = styled.div`
    position:absolute;
    background-color: rgb(209, 206, 206);;
    left:-1000px;
    z-index: 1;
    transition: all .6s ease;
    &.active{
        top:0;
        left:0;
        width:50%;
        height:100%;
    }
    
`