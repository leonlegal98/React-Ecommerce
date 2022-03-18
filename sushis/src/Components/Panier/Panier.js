import react, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './../../App.css';
import './../../produit.css';
import CartProvider from './../Provider/CartProvider';
import React, { useContext } from 'react';
import { CartContext } from './../Provider/CartProvider';
import { useNavigate } from 'react-router-dom';
import './CreateCommand';
import CreateCommand from './CreateCommand';




function Panier() {

    let navigate = useNavigate();

    const { addProduit, products, setProducts, cartItems, setCartItems, removeProductcart } = useContext(CartContext);

    const totalprice = cartItems.reduce((prix, item) => prix + item.quantity * item.prix, 0);
    console.log(cartItems);



    return (
        <div className="panier">
            <div className="paniersec">
                <h1>Produit panier</h1>

                {cartItems.map((item) => {
                    return (<div>


                        <p>name</p>
                        {item.name}

                        <button className="button" onClick={() => addProduit(item)}>plus</button>
                        <button className="button" onClick={() => removeProductcart(item)}>moins</button>
                        <p>prix</p>
                        {item.quantity} * ${item.prix}



                    </div>);

                })}
                <p>total prix</p>
                {totalprice}
                <br />
                <button onClick={() => navigate('/produit')}>page produit</button>


                <CreateCommand />


            </div>




        </div>
    );
}

export default Panier;