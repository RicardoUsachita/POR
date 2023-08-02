import React from 'react'
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import styled from 'styled-components'
import Navbar from './Navbar';
const EntradasComponent= () => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = (data) => {
        console.log(data);
        const Myswal = withReactContent(Swal);
        fetch('http://localhost:8080/entradas', {
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

            
                <Navbar/>
                <Formulario>
                <h2>
                    Ingrese un recibo
                </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='cajas'>
                            <label >Fecha de recibo</label>
                            <input type="date" name="fecha" {...register("fecha", { required: true })} />
                            {errors.fecha?.type === 'required' && <span>Este campo es requerido</span>}
                        </div>
                        <div className='cajas'>
                            <label>Numero Recibo</label>
                            <input type="number" name="num_recibo" {...register("num_recibo", { required: true })} />
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
            
        </Background>
    )
 }
 export default EntradasComponent;

const Background = styled.div`
    background-color: #FFF0C9;
    min-height: 100vh
    `

const Formulario = styled.div`
    h2{
        margin-top: 100px; 
    }
    form{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 900px;
    }

    input{
        font-weight: 700;
        color: #333;
        padding: 9px 25px;
        background: #fff;
        border: none;
        border-radius: 50px;
        transition: all 0.3s ease 0s;
    }

    .enviar{
        font-weight: 700;
        color: #fff;
        padding: 9px 25px;
        background: #333;
        border: none;
        border-radius: 50px;
        transition: all 0.3s ease 0s;
        }

    .cajas{
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
        background-color: #333;
        border-radius: 25px;
        padding: 20px;
        width: 60%;
        margin: 5px;
    }
`