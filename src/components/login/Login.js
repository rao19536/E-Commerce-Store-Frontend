import React from 'react'
import './style.scss'
import { useForm } from "react-hook-form"
import { useLoginUserMutation } from '../../services/endPoints/login'
import {Link, useNavigate} from 'react-router-dom'

const Login = () => {
    let navigate = useNavigate();
    const [loginUser, response] = useLoginUserMutation()
    console.log('response==>', response.data)
    const {data, isLoading, isError, error} = response
    const { register, handleSubmit } = useForm()
    const onSubmit = data => {
        loginUser(data)
    }
    if(response && response.data && response.data.code === 0 && response.data.message === 'success'){
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('id', response.data.data._id)
        localStorage.setItem('name', response.data.data.name)
        localStorage.setItem('city', response.data.data.city)
        navigate('/')
    }

  return (
    <div id="login">
        <h3 className="text-center text-white pt-5">Login Form</h3>
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div id="login-box" className="col-md-12 p-4">
                            <h2 className="text-center text-info">Login</h2>
                            <div className="form-group">
                                <label htmlFor="username" className="text-info pb-1">Username:</label><br/>
                                <input type="text" name="username" id="username" className="form-control" 
                                    {...register("username", {required: true})}
                                />
                            </div>
                            <br/>
                            <div className="form-group">
                                <label htmlFor="password" className="text-info pb-1">Password:</label>
                                <br/>
                                <input type="text" name="password" id="password" className="form-control" 
                                    {...register("password", {required: true})}
                                />
                            </div>
                            <div className="form-group">
                                <br/>
                                <button className="btn btn-info btn-md">
                                    {isLoading ? (<>Loging...</>):'Login'}
                                </button>
                                <div class="form-group">
                                    <div class="topCushion text-dark pt-2">Already a member?
                                        <Link to='/register' className='text-infos'>Register</Link>
                                    </div>
                                </div>
                                
                                {data && data.code === 1 && (
                                    <div class="text-danger mt-3">
                                        <label>
                                            {data.message
                                                .charAt(0)
                                                .toUpperCase() +
                                                data.message.slice(1)}
                                        </label>
                                    </div>
                                )}
                                {isError && (
                                    <p className='text-danger mb-0 mt-3'>
                                        {error.error}
                                    </p>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
