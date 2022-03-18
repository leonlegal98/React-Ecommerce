import react from 'react';
import './../../App.css';
import { useForm } from "react-hook-form";
import { modifierProduct } from './../../API';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function ModifProduct() {

    const { register, handleSubmit, } = useForm();
    const params = useParams();
    let navigate = useNavigate()

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/modpro/${params.id}`)
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [params.id])
    console.log([params.id]);



    return (
        <div>
            <h4>modifier un produits:</h4>
            <form


                onSubmit={handleSubmit(async (data) => {

                    let response = await modifierProduct(data)


                })}>


                <label htmlFor="">name: </label>
                <input type="text" {...register("name", { required: true, maxLength: 20 })} />
                <br />
                <label htmlFor="">prix: </label>
                <input type="text" {...register("prix")} />
                <br />

                <input type="submit" />
                <button onClick={() => navigate('/produit')}>go produit</button>


            </form>
        </div>


    );
}

export default ModifProduct;
