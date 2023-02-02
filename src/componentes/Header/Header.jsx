import React, { useState } from 'react';
import styled from 'styled-components'
import Burguerbutton from '../BurgerButton/BurgerButton'

function Navbar () {
const [clicked, setClicked] = useState(false)
const handleClick = () => {
    setClicked(!clicked)
}


return (
    <>
            <NavContainer>
            <h2>Carmelo Rubiolo</h2>
            <div className={`menu ${clicked ? 'active' : ''}`}>
                <a href="#" onClick={handleClick}>Inicio</a>
                <a href="#" onClick={handleClick}>Acerca</a>
                <a href="#" onClick={handleClick}>Skills</a>
                <a href="#" onClick={handleClick}>Estudios</a>
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
h2{
    color:white;
}
    padding: .4rem;
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
    z-index:0;
    transition: all .6s ease;
    &.active{
        top:0;
        left:0;
        width:50%;
        height:100%;
    }
    
`