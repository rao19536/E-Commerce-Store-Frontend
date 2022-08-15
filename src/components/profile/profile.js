import React from 'react'
import './style.scss'
import { useForm, Controller } from "react-hook-form"
import { Select } from 'antd'

const Profile = (props) => {
    const {
        name,
        email,
        contact,
        country,
        education,
        city,
        myskills,
        response
    } = props

    const { register, handleSubmit, control } = useForm({
        defaultValues: {
            name: name,
            email: email,
            contact: contact,
            country: country,
            education: education,
            city: city,
            skills: myskills
        }
    })
    const onSubmit = async (data) => {
        props.updateInfo(data)
    }
    const {isLoading, isError} = response
    let skills = [
        { value: "JavaScript", label: "JavaScript" },
        { value: "React Js", label: "React Js" },
        { value: "Redux", label: "Redux" },
        { value: "Antd", label: "Antd" },
        { value: "Material UI", label: "Material UI" },
        { value: "PHP", label: "PHP" },
        { value: "Laravel", label: "Laravel" },
        { value: "Codeigniter", label: "Codeigniter" },
        { value: "HTML", label: "HTML" },
        { value: "CSS", label: "CSS" },
        { value: "Bootstrap", label: "Bootstrap" },
        { value: "SCSS", label: "SCSS" }
    ] 

    return (
        <section className='my-container' id='profile'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-8 col-xl-6 Larger shadow bg-white mb-5 mt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col text-center title">
                                <h1 className='text-dark'>My Profile</h1>
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
                                    {...register("contact", { required: true })}
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
                            <div className="row align-items-center mt-4">
                                <div className="col-md-12">
                                    <Controller
                                        name="skills"
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                mode="multiple"
                                                name="iceCreamType"
                                                placeholder="Select Your Skills"
                                                className='skills'
                                                options={skills}
                                            />
                                        )}
                                        control={control}
                                    />
                                </div>
                            </div>
                            <div className="row justify-content-start mt-4">
                                <div className="col">
                                    <div className="form-check">
                                        <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" />
                                            I hereby agree to abide by the <a href="/">Terms and Conditions.</a>
                                        </label>
                                    </div>

                                    <button type="submit" className="btn btn-primary mt-4 mb-5">
                                        {isLoading ? 'Updating...': 'Update'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile