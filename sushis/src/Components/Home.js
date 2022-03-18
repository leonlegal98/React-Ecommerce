import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import './../API';
import { useEffect, useState } from "react";
import { getUser } from './../API';


function Home() {



    const [users, setUsers] = useState([]);
    useEffect(() => {


        getUser({}).then((data) => {

            console.log(data.data)
            console.log('coucoi')
            setUsers(data.data)

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

            <header className="masthead">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12 text-center">
                            <h1 id="hio" className="fw-light">Bienvenue sur Shop Sushis</h1>
                            <p className="lead">Tous nos produits du Japon</p>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-5">
                <div className="container">
                    <h2 className="fw-light">A Propos</h2>
                    <p>Shop Sushis est une chaîne française de restauration rapide japonaise, fondée en 1998 par léon le gal et emir azaiez.
                        La chaîne de restaurants Sushi Shop est le leader européen sur son créneau avec plus de 160 magasins dans douze pays et un chiffre d'affaires de 202 millions d'euros en 2017,
                        dont plus de la moitié provient de la commande en ligne livrée aux clients</p>

                    <h2 className="fw-light">Nous Suivre</h2>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, labore? Velit, obcaecati odit accusantium incidunt officiis consequuntur. Culpa, nisi aliquid magnam blanditiis iusto odio consequuntur ipsam quisquam, corrupti iste deleniti.</p>

                </div>
            </section>



        </div>
    );
}

export default Home;
