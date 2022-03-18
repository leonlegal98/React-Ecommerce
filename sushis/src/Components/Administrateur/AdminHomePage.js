import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './../../App.css';
import './../../admin.css';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getProduct, getCommand, deleteProduct, modifierProduct } from './../../API';
import { getIngredient } from './../../API';
import { deleteIngredient } from './../../API';
import CreateProduct from './CreateProduct';
import ModifProduct from './ModifierProduct';
import ModifierIngredient from './ModifierIngredient';
import CreateIngredientComponent from './CreateIngredients';
import { useNavigate } from "react-router-dom";
import { modifProduit } from './../../API';



function AdminHome() {
    let navigate = useNavigate();

    const { register, handleSubmit, } = useForm();
    const [products, setProducts] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [commands, setCommands] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {

        getProduct({}).then((data) => {

            console.log(data.data)
            setProducts(data.data)

        })

    }, [])
    useEffect(() => {

        getIngredient({}).then((data) => {

            console.log(data.data)
            setIngredients(data.data)
        })

    }, [])
    useEffect(() => {

        getCommand({}).then((data) => {

            console.log(data.data)
            setCommands(data.data)
        })

    }, [])





    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Shop Sushis</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/admin">Admin</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link" href="/cuisine" role="button" aria-current="page">
                                    Cuisine
                                </a>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div className="sectionadmin">



                <div className="produitadmin">

                    <h4>liste des produits :</h4>

                    {products.map(product => {

                        return (<div>

                            {"nom: " + product.name + " prix: " + product.prix}
                            <br />
                            <button className="button" onClick={() => navigate(`/modpro/${product.id}`)}>Editer</button>

                            <button className="button" onClick={() => { deleteProduct(product.id) }}>supprime</button>

                        </div>);

                    })}

                    <CreateProduct />

                </div>

                <div className="ingredientadmin">
                    <h4>liste des Ingredients :</h4>

                    {ingredients.map(ingredient => {

                        return (<div>


                            {"nom: " + ingredient.name + " stock: " + ingredient.stock}
                            <br />
                            <button className="button" onClick={() => navigate(`/modingr/${ingredient.id}`)}>Editer</button>
                            <button className="button" onClick={() => { deleteIngredient(ingredient.id) }}>supprime</button>

                        </div>);

                    })}
                    <CreateIngredientComponent />


                </div>

                <div className="commandadmin">
                    <h4>liste des command</h4>

                    {commands.map(command => {

                        let statusok = "";

                        if (command.id == 1) {
                            statusok = "prete";

                        }
                        if (command.id == 2) {
                            statusok = "non prete";

                        }


                        return (<div>
                            <p >number :  {command.id}</p>


                            <p>status : {statusok} </p>


                            <p>créé le : {command.date} </p>


                        </div>);

                    })}

                </div>
            </div>


        </div>
    );
}

export default AdminHome;
