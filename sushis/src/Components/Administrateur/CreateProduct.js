import react from 'react';
import './../../App.css';
import { createProduct } from '../../API';
import { useForm } from "react-hook-form";


function CreateProduct() {

    const { register, handleSubmit, } = useForm();



    return (
        <div>
            <h4>creer un produits:</h4>
            <form


                onSubmit={handleSubmit(async (data) => {

                    let response = await createProduct(data)



                })}>

                <label htmlFor="">name: </label>
                <input type="text" {...register("name", { required: true, maxLength: 20 })} />
                <br />
                <label htmlFor="">prix: </label>
                <input type="text" {...register("prix")} />

                <input type="submit" />


            </form>
        </div>


    );
}

export default CreateProduct;
