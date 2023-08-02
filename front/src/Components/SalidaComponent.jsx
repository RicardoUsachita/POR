import React from 'react'
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import styled from 'styled-components'
import Navbar from './Navbar';

function SalidaComponent() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const Myswal = withReactContent(Swal);

    const onSubmit = (data) => {
        console.log(data);
        fetch('http://localhost:8080/salidas', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),})
            .catch(err => console.error(err));

            Myswal.fire({
                title: <strong>Exito!</strong>,
                html: <i>Se ha añadido la pregunta correctamente</i>,
                icon: 'success'
            });
    }
    return (
        <Background>
        <div>
            <Navbar/>

            <Formulario>
                <h2>
                    Ingrese un recibo
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='cajas'>
                        <label>Fecha de recibo</label>
                        <input type="date" name="fecha" {...register("fecha", { required: true })} />
                        {errors.fecha?.type === 'required' && <span>Este campo es requerido</span>}
                    </div>
                    <div className='cajas'>
                        <label>Tipo de Documento</label>
                        <select {...register('tipo_documento', {required:true})}>
                            <option value="">Seleccione un tipo de documento</option>
                            <option value="Factura">Factura</option>
                            <option value="Boleta">Boleta</option>
                        </select>
                        {errors.documento?.type === 'required' && <span>Este campo es requerido</span>}
                    </div>
                    <div className='cajas'>
                        <label>Numero Documento</label>
                        <input type="number" name="numero" {...register("numero_documento", { required: true })} />
                        {errors.numero?.type === 'required' && <span>Este campo es requerido</span>}
                    </div>
                    <div className='cajas'>
                        <label>Motivo</label>
                        <input type="text" name="motivo" {...register("motivo", { required: true })} />
                        {errors.numero?.type === 'required' && <span>Este campo es requerido</span>}
                    </div>
                    
                    <div className='cajas'>
                        <label>Monto</label>
                        <input type="number" name="monto" {...register("monto", { required: true })} />
                        {errors.monto?.type === 'required' && <span>Este campo es requerido</span>}
                    </div>
                    <input className="enviar" type="submit" value="Enviar"/>
                    
                </form>
            </Formulario>
            
        </div>
        </Background>
    )
}

export default SalidaComponent

const Background = styled.div`
    background-color: #FFF0C9;
    min-height: 100vh
    `

const Formulario = styled.div`
    
    form{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0 auto;
        width: 30%;
    }
    label{
        margin: 5px;
        
        align-items: left;
    }

    input{
        font-weight: 700;
        color: #333;
        padding: 9px 20px;
        background: #fff;
        border: 2 px;
        border-radius: 5px;
    }

    .enviar{
        font-weight: 700;
        color: #fff;
        padding: 9px 25px;
        background: #333;
        border: none;
        border-radius: 25px;
        padding: 20px;
        }

    .cajas{
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