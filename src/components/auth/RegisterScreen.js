import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator'

import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        name: 'Cruella',
        email: 'cruella@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const handleRegister = (e) => {
        e.preventDefault();  
        
        if( isFormValid() ){
           dispatch( startRegisterWithEmailPasswordName(email, password, name) );
        }
    }

    const isFormValid = () => {

        if( name.trim().length === 0 ){
            dispatch( setError('name is required'));
            return false;
        } else if ( !validator.isEmail(email) ){
            dispatch( setError('email is not valid'));
            return false
        } else if ( password !== password2 || password.length < 5){
            dispatch( setError('Password shold be at least 6 characters and match eacht other'));
            return false;
        }

        dispatch( removeError());


        return true;
    }

    const { name, email, password, password2 } = formValues;

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={ handleRegister } >

                {
                    msgError &&
                    (
                    <div className="auth__alert-error">
                        { msgError }
                    </div>
                    )
                }

                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />              

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    autoComplete="off"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    autoComplete="off"
                    value={ password2 }
                    onChange={ handleInputChange }
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Login
                </button>

                <Link className="link"
                to="/auth/login" >
                    Already registered?
                </Link>
            </form>
        </>
    )
}



/*
hscer el dispatch a su store de cada uno de los respectivos mensajes,
ose sea si tenemos un error va a dispararlo con el error del isformvalid

en el state del redux en chrome debe salir el mensaje de error que salio 

si el formulario pasa hay que quitar el error, se pede hacer en 
isFormValid antes del return true

*/