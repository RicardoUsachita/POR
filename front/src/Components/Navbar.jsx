import React, {useState} from 'react'
import styled from 'styled-components'
import BotonDesplegable from './BotonDesplegable'

function Navbar() {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    }
  return (
    <>
        <NavContainer>
            <h2>Caja <span>Chica</span></h2>
            <div className={`links ${clicked ? 'active' : ''}`}>
                <a onClick={handleClick} href="/">Home</a>
                <a onClick={handleClick} href="/entrada">Entradas</a>
                <a onClick={handleClick} href="/salida">Salidas</a>
                <a onClick={handleClick} href="/reporte">Reporte</a>
            </div>
            <div className='burger'>
                <BotonDesplegable clicked= {clicked} handleClick={handleClick}/>
            </div>
            <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
        </NavContainer>
    </>
  )
}

export default Navbar

const  NavContainer = styled.nav`
    h2{
        color: #fff;
        font-weight: 400;
        span{
            font-weight: bold;
        }
    }
    padding: .4rem;
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
        color: #fff;
        text-decoration: none;
        margin-right: 1rem;
    }
    .links{
    position : absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease ;
    a{
        color: #fff;
        font-size: 2rem;
        display: block;
    }
    @media(min-width: 768px){
        position: initial;
        margin: 0;
        a{
            font-size: 1rem;
            color: #fff;
            display: inline;
        }
        display: block;
    }
    }
  
  
    .links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        text-align: center;
        a{
        font-size: 2rem;
        margin-top: 1rem;
        color: white;
        }
    }
    .burger{
        @media(min-width: 768px){
            display: none;
        }
        }
`
const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`