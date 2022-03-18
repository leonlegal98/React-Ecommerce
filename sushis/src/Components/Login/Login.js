import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './../../App.css';
import './../../login.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from './../../API';
import { getUser } from './../../API';

function Login() {

    let navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [users, setUsers] = useState([]);

    useEffect(() => {




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
            <div className="loginsection">



                <form className="formsec" onSubmit={handleSubmit(async (form) => {

                    let response = await login(form)

                    localStorage.setItem('token', response.data)

                    getUser({}).then(({ data }) => {

                        if (data.role === "user") {

                            navigate('/produit')

                        }
                        if (data.role === "cuisine") {

                            navigate('/cuisine')

                        }
                        if (data.role === "admin") {

                            navigate('/admin')
                        }
                        setUsers(data.data)

                    })

                })}>
                    <div className="changelog">
                        <h1>Veuillez vous indentifier ! </h1>

                        <input
                            type="email"
                            defaultValue="test@supinternet.fr"
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Entered value does not match email format"
                                }
                            })}

                        /> <br />
                        {errors.email && <span>This field is required</span>} <br />

                        <input type="password" {...register("password", { required: true })} /> <br />
                        {errors.password && <span>This field is required</span>} <br />

                        <input className="button" type="submit" /> <br />
                    </div>

                </form>


            </div>


        </div>
    );
}

export default Login;
