import React from 'react'
// import Navbar from '../componets/Navbar/Navbar'
import hadset from '../componets/Asserts/images/Headsets_.jpeg'
import './Signin.css'
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

    const navigate = useNavigate();

    function signup() {
        navigate('/signup')
    }

    return (
        <div className='SignIn-form d-flex p-0 w-100'>
            <div className='img'> <img src={hadset} alt='img' /></div>
            <div className='SignIn '>
                <div className='icon'> <i class="fa-solid fa-lock"></i>
                </div>
                <h3>SignIn</h3>
                <form className='form mb-3'>
                    <div className='m-1 main-form'>
                        <input type="text" placeholder="Email Address*" className='form-control form-control-lg mb-3' required='true' />
                        <input class="form-control form-control-lg " type="password" placeholder="Password*" aria-label=".form-control-lg example"></input>
                        <div class="form-check m-3 remember">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" name="remember" /> Remember me
                            </label>
                        </div>
                        <button type="button" class="btn btn-primary">SignIn</button>
                    </div>
                </form>
                <div className='d-flex forgot'>
                    <p>forgot password?</p>
                    <p>Don't have account?<span onClick={signup}>SignUp</span></p>
                </div>
                <div className='copyrights my-5'>
                    <p>copyrigts &copy; Harmoni 2023 </p>
                </div>
            </div>
        </div>
    )
}

export default SignIn