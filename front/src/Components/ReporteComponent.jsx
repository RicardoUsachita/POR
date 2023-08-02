import React from 'react'
import {useQuery} from 'react-query'
import styled from 'styled-components'
import Navbar from './Navbar';

function ReporteComponent() {
    const getMovimientos = async () => {
        const response = await fetch('http://localhost:8080/movimientos');
        return response.json();
    }

    const {data, status} = useQuery('movimientos' , getMovimientos);

    if(status === 'loading'){
        return <Background><Navbar/><div>Cargando datos...</div></Background>
    }

    if(status === 'error'){
        return <Background><Navbar/><div>Hubo un error al cargar los datos</div></Background>
    }


    return (
        <Background>
          <Navbar/>
            <h2>Reporte de movimientos</h2>
          <Cuerpo> 
          <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Tipo de Documento</th>
              <th>Número de Documento</th>
              <th>Motivo del Movimiento</th>
              <th>Ingreso de Dinero</th>
              <th>Salida de Dinero</th>
              <th>Saldo</th>
            </tr>
          </thead>
          <tbody>
            {data.map((movimiento) => (
              <tr key={movimiento.id}>
                <td>{movimiento.fecha}</td>
                <td>{movimiento.tipo_documento}</td>
                <td>{movimiento.numero_documento}</td>
                <td>{movimiento.motivo}</td>
                <td>{movimiento.ingreso}</td>
                <td>{movimiento.egreso}</td>
                <td>{movimiento.saldo}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </Cuerpo>
        </Background>
        
            
    )
}

export default ReporteComponent;

const Background = styled.div`
    background-color: #FFF0C9;
    min-height: 180vh
    `
const Cuerpo = styled.div`
  table{
    border-collapse: collapse;
    margin: auto;
    margin-bottom: 5%;
    font-size: 0.9em;
    min-width: 400px;
    border-radius: 10px 10px 10px 10px;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(12, 11, 11, 0.15);
  }

  thead tr{
    background-color: #333;
    color: #ffffff;
    text-align: left;
    font-weight: bold;
  }

  th, td{
    padding: 12px 15px;
  }
  tbody tr{
    border-bottom: 1px solid #333;
    border-top: #333;
    border-left: 1px #333;
  }
  
`
