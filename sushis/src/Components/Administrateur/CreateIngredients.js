import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './../../App.css';
import { createIngredient } from '../../API';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";


function CreateaIngredients() {

    const { register, handleSubmit, } = useForm();


    return (
        <div>
            <h4>creer un ingredient:</h4>
            <form

                onSubmit={handleSubmit(async (data) => {

                    let response = await createIngredient(data)

                })}>

                <label htmlFor="">name: </label>
                <input type="text" {...register("name", { required: true, maxLength: 20 })} />
                <br />
                <label htmlFor="">stock: </label>
                <input type="text" {...register("stock")} />

                <input type="submit" />
            </form>

        </div>


    );
}

export default CreateaIngredients;
