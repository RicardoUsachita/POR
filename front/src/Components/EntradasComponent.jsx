import { useForm } from "react-hook-form";

const Entradas = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <div>
            <h2>
                Ingrese un recibo
            </h2>
            <form>

                <div>
                    <label>Fecha de recibo</label>
                    <input type="date" name="fecha" {...register("fecha", { required: true })} />
                </div>
                <div>
                    <label>Numero Recibo</label>
                    <input type="number" name="numero" {...register("numero", { required: true })} />
                </div>
                <div>
                    <label>Monto</label>
                    <input type="number" name="monto" {...register("monto", { required: true })} />
                </div>
                
            </form>
        </div>
    )
 }
 export default Entradas;