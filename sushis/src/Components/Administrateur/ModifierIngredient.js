import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './../../App.css';
import { modifierIngredient } from '../../API';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { getIngredient } from './../../API';


function ModifierIngredient() {

    const { register, handleSubmit, } = useForm();
    const [ingredients, setIngredients] = useState([]);
    useEffect(() => {

        getIngredient({}).then((data) => {

            console.log(data.data)
            setIngredients(data.data)
        })

    }, [])



    return (
        <div>


            <h4>modifier un ingredient:</h4>
            <form

                onSubmit={handleSubmit(async (data) => {

                    let response = await modifierIngredient(data)

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

export default ModifierIngredient;
