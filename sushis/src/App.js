import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Components/Home';
import CuisineHome from './Components/Cuisine/CuisineHomePage';
import AdminHome from './Components/Administrateur/AdminHomePage';
import Login from './Components/Login/Login';
import Panier from './Components/Panier/Panier';
import Produit from './Components/Produits/Produits';
import API from './API';
import { CartProvider } from './Components/Provider/CartProvider';
import CartContext from './Components/Provider/CartProvider';
import ModifProduct from './Components/Administrateur/ModifierProduct';
import ModifierIngredient from './Components/Administrateur/ModifierIngredient';



function App() {
  return (
    <div >

      <BrowserRouter>
        <CartProvider>


          <Routes>

            <Route path="/" element={<Home />} > </Route>
            <Route path="/cuisine" element={<CuisineHome />} > </Route>
            <Route path="/admin" element={<AdminHome />} > </Route>
            <Route path="/login" element={<Login />} > </Route>
            <Route path="/panier" element={<Panier />} > </Route>
            <Route path="/produit" element={<Produit />} > </Route>
            <Route path="/modpro/:id" element={<ModifProduct />} > </Route>
            <Route path="/modingr/:id" element={<ModifierIngredient />} > </Route>





          </Routes>
        </CartProvider>


      </BrowserRouter>





    </div>
  );
}

export default App;
