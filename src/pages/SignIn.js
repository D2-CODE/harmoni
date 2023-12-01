import React from 'react'
// import Navbar from '../componets/Navbar/Navbar'
import hadset from '../componets/Asserts/images/Headsets_.jpeg'
import './Signin.css'

const SignIn = () => {
    return (
        <div className='contact-form d-flex p-0 w-100'>
            <div className='img'> <img src={hadset} alt='img' /></div>
            <div className='contact '>
                <div className='icon'> <i class="fa-solid fa-lock"></i>
                </div>
                <h3>SignIn</h3>
                <form className='form w-100 mb-3'>
                    <div className='m-1'>
                        <input type="text" placeholder="Email Address*" className='form-control form-control-lg m-3' required='true' />
                        <input class="form-control form-control-lg m-3" type="password" placeholder="Password*" aria-label=".form-control-lg example"></input>
                        <div class="form-check m-3">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" name="remember" /> Remember me
                            </label>
                        </div>
                        <button type="button" class="btn btn-primary btn-block w-100 m-3">SignIn</button>
                    </div>
                </form>
                <div className='d-flex forgot'>
                    <h5>forgot password?</h5>
                    <h5>Don't have account?SignUp</h5>
                </div>
                <div className='copyrights my-5'>
                    <p>copyrigts &copy; Harmoni 2023 </p>
                </div>
            </div>
        </div>
    )
}

export default SignIn