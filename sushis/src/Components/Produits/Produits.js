import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './../../App.css';
import './../../produit.css';
import { getProduct } from './../../API';
import { getIngredientProduct } from './../../API';
import { getProductIngr } from './../../API';
import Panier from './../Panier/Panier'
import { createContext, useEffect, useState } from "react";
import { Navigate } from 'react-router';
import { useNavigate } from 'react-router-dom';


import { useContext } from 'react';
import { CartContext } from './../Provider/CartProvider';


function Produit() {


    let navigate = useNavigate()
    const [products, setProducts] = useState([]);
    const [productingr, setProductingr] = useState([]);
    const [ingrProduct, setIngrProduct] = useState([]);
    const { cartItems, setCartItems } = useContext(CartContext);


    useEffect(() => {

        getProduct({}).then((data) => {

            console.log(data.data)
            setProducts(data.data)
        })

    }, [])


    const addProduit = (product) => {

        const ProductExist = cartItems.find((item) => item.id === product.id);
        if (ProductExist) {
            setCartItems(cartItems.map((item) => item.id === product.id ?
                { ...ProductExist, quantity: ProductExist.quantity + 1 } : item));
        }
        else {
            setCartItems([...cartItems, { ...product, quantity: 1 }])
        }


    }

    console.log(cartItems);




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
                                <a className="nav-link" href="/produit">Produit</a>
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

            <div className="produitsec">
                <div className="produit">

                    <h1>Listes de nos Produits</h1>
                    {products.map(product => {

                        return (<div>
                            <h4>produit numero : {product.id}</h4>

                            <p>nom : {product.name}</p>
                            <p>prix : {product.prix}</p>

                            <button onClick={() => addProduit(product)}>add panier</button >
                            <br />
                            <button onClick={() => navigate('/panier')}>gopanier</button>


                        </div>);

                    })}
                    {cartItems.map((item) => {
                        return <ul>

                            <li>{item.name}</li>
                            <li>{item.prix}</li>
                        </ul>
                    })}
                </div>

            </div>

        </div>



    );
}

export default Produit;