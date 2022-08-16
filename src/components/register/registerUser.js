import React from 'react'
import './style.scss'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
import { useRegisteruserMutation } from '../../services/endPoints/register'

const Register = () => {
    const { register, handleSubmit } = useForm()
    const [registerUser, response] = useRegisteruserMutation()
    const{isLoading, isError} = response
    
    const onSubmit = async (data) => {
        console.log('Registration', data)
        await registerUser(data)
        .then((resp)=>{
            console.log('resp=>', resp)
        }).catch((err)=>{
            console.error('err', err)
        })
    }

  return (
    <section className='my-container' id='register'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-8 col-xl-6 Larger shadow bg-white mt-5 mb-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col text-center title">
                            <h1>Registration Form</h1>
                            {isError ? (
                                <p className='text-danger'>Oops! Api is not working</p>
                            ):''}
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col mt-4">
                            <input type="text" className="form-control" placeholder="Full Name"
                                {...register("name", { required: true })}
                            />
                            </div>
                        </div>
                        <div className="row align-items-center mt-4">
                            <div className="col">
                            <input type="email" className="form-control" placeholder="Email" 
                                {...register("email", { required: true })}
                            />
                            </div>
                        </div>
                        <div className="row align-items-center mt-4">
                            <div className="col">
                            <input type="text" className="form-control" placeholder="Contact Number" 
                                {...register("contact", { required: true, maxLength:7 })}
                            />
                            </div>
                        </div>
                        <div className="row align-items-center mt-4">
                            <div className="col">
                            <input type="text" className="form-control" placeholder="Education" 
                                {...register("education", { required: true })}
                            />
                            </div>
                        </div>
                        <div className="row align-items-center mt-4">
                            <div className="col">
                            <input type="text" className="form-control" placeholder="Country" 
                                {...register("country", { required: true })}
                            />
                            </div>
                            <div className="col">
                            <input type="text" className="form-control" placeholder="City" 
                                {...register("city", { required: true })}
                            />
                            </div>
                        </div>
                        <div className="row justify-content-start mt-4">
                            <div className="col">
                            <div className="form-check">
                                <label className="form-check-label">
                                <input type="checkbox" className="form-check-input"  
                                    {...register("terms", { required: true })}
                                />
                                    I hereby agree to abide by the <a href="/">Terms and Conditions.</a>
                                </label>
                            </div>

                            <button type="submit" className="btn btn-primary mt-4">
                                {isLoading ? 'Submitting...': 'Submit'}
                            </button>
                            <div class="form-group mb-5 mt-2">
                                <div class="topCushion text-dark">Already a member?
                                    <Link to='/login' className='text-primary'>Login</Link>
                                </div>
                            </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Register
