import React from 'react'
import { useForm } from "react-hook-form";
import styled from 'styled-components'

function SalidaComponent() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        fetch('http://localhost:8080/salida', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),})
            .catch(err => console.error(err));
    }
    return (
        <div>
            <h2>
                Ingrese un recibo
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <label>Fecha de recibo</label>
                    <input type="date" name="fecha" {...register("fecha", { required: true })} />
                    {errors.fecha?.type === 'required' && <span>Este campo es requerido</span>}
                </div>
                <div>
                    <label>Tipo de Documento</label>
                    <select {...register('documento', {required:true})}>
                        <option value="">Seleccione un tipo de documento</option>
                        <option value="1">Factura</option>
                        <option value="2">Boleta</option>
                    </select>
                    {errors.documento?.type === 'required' && <span>Este campo es requerido</span>}
                </div>
                <div>
                    <label>Numero Documento</label>
                    <input type="number" name="numero" {...register("numero", { required: true })} />
                    {errors.numero?.type === 'required' && <span>Este campo es requerido</span>}
                </div>
                <div>
                    <label>Motivo</label>
                    <input type="text" name="motivo" {...register("motivo", { required: true })} />
                    {errors.numero?.type === 'required' && <span>Este campo es requerido</span>}
                </div>
                
                <div>
                    <label>Monto</label>
                    <input type="number" name="monto" {...register("monto", { required: true })} />
                    {errors.monto?.type === 'required' && <span>Este campo es requerido</span>}
                </div>
                <input type="submit" value="Enviar"/>
                
            </form>
        </div>
    )
}

export default SalidaComponent