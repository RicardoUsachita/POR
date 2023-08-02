import React, {useState} from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
function HomeComponent() {
  const Entrada = () => {
    window.location.href = '/entrada';
  }
  const Salida = () => {
    window.location.href = '/salida';
  }
  const Reporte = () => {
    window.location.href = '/reporte';
  }
  const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    }
  return (
    <Background>
        <Navbar/>
        <Botones>
        <body>
            <h1>¡Bienvenido!</h1>
            <button type='button' onClick={Entrada}>Entradas</button>
            <button type='button' onClick={Salida}>Salidas</button>
            <button type='button' onClick={Reporte}>Reporte</button>
        </body>
        </Botones>
    </Background>
  )
}

export default HomeComponent

const Background = styled.div`
    background-color: #FFF0C9;
    min-height: 100vh
`
const Botones = styled.div`
  margin-top: 100 auto; 
  body{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    width: 30%;
    }
  button{
    justify-content: center;
    flex-direction: row;
    align-items: center;
    color: #fff;
    
    background-color: #333;
    border-radius: 25px;
    padding: 20px;
    margin: 5px;
  }
`