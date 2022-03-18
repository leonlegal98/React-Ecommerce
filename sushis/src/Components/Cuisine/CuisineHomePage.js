import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './../../App.css';
import './../../cuisine.css';
import { useEffect, useState } from "react";
import { getProduct, getCommand } from './../../API';





function CuisineHome() {



    const [commands, setCommands] = useState([]);

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
                                <a className="nav-link" href="/admin">Administrateur</a>
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
            <div className="command">
                <div className="commandsec">
                    <h1>listes des commande</h1>
                    {commands.map(command => {

                        let statusok = "";

                        if (command.id == 1) {
                            statusok = "le status de la command est livré";

                        }
                        if (command.id == 2) {
                            statusok = "le status de la command n'est pas livré";

                        }

                        return (<div>



                            <h4>command numero: {command.id}</h4>
                            <p>status: {command.status}</p>
                            <p>date: {command.date}</p>
                            <p>{statusok}</p>
                            <br />

                            <button >changer status d'une commande</button>
                            <br />
                            <button>detail commande </button>





                        </div>);

                    })}
                </div>


            </div>




        </div>
    );
}

export default CuisineHome;
