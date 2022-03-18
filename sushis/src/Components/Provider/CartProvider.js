import React, { createContext, useState, useEffect } from 'react';
import { getProduct } from './../../API';

export const CartContext = createContext()

export const CartProvider = (props) => {

    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);


    useEffect(() => {

        getProduct({}).then((data) => {

            console.log(data.data)
            setProducts(data.data)
        })

    }, [])

    // const getDetail = async

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
    const removeProductcart = (product) => {

        const ProductExist = cartItems.find((item) => item.id === product.id);
        if (ProductExist.quantity === 1) {
            setCartItems(cartItems.filter((item) => item.id !== product.id));
        }
        else {
            setCartItems(
                cartItems.map((item) => item.id === product.id ? { ...ProductExist, quantity: ProductExist.quantity - 1 } : item
                )
            );
        }
    }



    return (

        <CartContext.Provider value={{ addProduit, products, setProducts, cartItems, setCartItems, addProduit, removeProductcart }} >
            {props.children}
        </CartContext.Provider>
    )

}
export default CartProvider;