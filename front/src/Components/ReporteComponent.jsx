import React from 'react'
import {useQuery} from 'react-query'
import styled from 'styled-components'

function ReporteComponent() {
    const getMovimientos = async () => {
        const response = await fetch('http://localhost:8080/resumen');
        return response.json();
    }

    const {data, status} = useQuery('movimientos' , getMovimientos);

    if(status === 'loading'){
        return <div>Cargando datos...</div>
    }

    if(status === 'error'){
        return <div>Hubo un error al cargar los datos</div>
    }


    return (
        <div>
            <h2>Reporte de movimientos</h2>

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
              <td>{movimiento.tipoDocumento}</td>
              <td>{movimiento.numeroDocumento}</td>
              <td>{movimiento.motivo}</td>
              <td>{movimiento.ingreso}</td>
              <td>{movimiento.salida}</td>
              <td>{movimiento.saldo}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
        
            
    )
}

export default ReporteComponent;
