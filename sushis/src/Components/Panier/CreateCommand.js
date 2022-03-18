import react from 'react';
import './../../App.css';
import { createCommand } from '../../API';
import { useForm } from "react-hook-form";


function CreateCommand() {

    const { register, handleSubmit, } = useForm();


    return (
        <div>
            <h4>creer une commande:</h4>
            <form


                onSubmit={handleSubmit(async (data) => {

                    let response = await createCommand(data)

                })}>

                <label htmlFor="">status: </label>
                <input type="text" {...register("status", { required: true, maxLength: 20 })} />
                <br />
                <label htmlFor="">date: </label>
                <input type="text" {...register("date")} />
                <br />
                <label htmlFor="">produit: </label>
                <input type="text" {...register("product")} />

                <input type="submit" />


            </form>
        </div>


    );
}

export default CreateCommand;
