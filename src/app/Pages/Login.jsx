import React from 'react'
import '../components/login.css'
import logo from '../img/img.svg'
import {useDispatch} from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import { setNameProduct } from '../redux/store/slices/nameProduct.slice';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const btnSubmit = e => {
      e.preventDefault()
      const inputValue = e.target.name.value.trim()
      if (inputValue.length !== 0) {
        dispatch(setNameProduct(inputValue))
        navigate('/Dashboard')
      }
    }


  return (
    <div className='login'>
        <section className="side">
            <img src={logo} alt="Logo"/>
        </section>

        <section className="main">
            <div className="login-container">
                <p className="title">Sistema de Inventario</p>
                <div className="separator"></div>
                <p className="welcome-message">Proporcione sus credenciales de inicio de sesión para acceder a todos nuestros servicios.</p>

                <form onSubmit={btnSubmit}  className="login-form">
                    <div className="form-control">
                        <input  type="text" placeholder="Usuario" required/>
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="form-control">
                        <input id='name' type="password" placeholder="Contraseña" required/>
                        <i className='bx bxs-lock-alt'></i>
                    </div>

                    <button className="submit">Inicio de sesión</button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Login