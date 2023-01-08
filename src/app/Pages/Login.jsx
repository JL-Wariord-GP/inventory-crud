import React from 'react'
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
      navigate('/Home')
    }
  }

  return (
    <div> 
      {
        //! INFO DATA CREDENTIALS
      }

        <h1>Hello is Login !</h1>
        <form onSubmit={btnSubmit} className='container__form__home'>
          <label>Usuario</label>
          <input type="text" required/>
          <label>Constraseña</label>
          <input type="password" id='name' required/>
          <button className='btn btn-blue btn-blue:hover'>
            ENVIAR
          </button>
        </form>
    </div>
  )
}

export default Login