import React from 'react'
import hadset from '../componets/Asserts/images/Headsets_.jpeg'
import './SignUp.css'

const SignUp = () => {
    return (
        <div className='contact-form d-flex p-0 '>
            <img className='img' src={hadset} alt='img' />
            <div className='contact'>
                <div className='icon'> <i class="fa-solid fa-lock"></i>
                </div>
                <h3>SignUp</h3>
                <form className='form w-100 mb-3'>
                    <div className='w-100'>
                        <input type="text" placeholder="Name*" className='form-control form-control-lg mb-3' required='true' />
                        <input class="form-control form-control-lg mb-3" type="email" placeholder="Email*" aria-label=".form-control-lg example"></input>
                        <div className='d-flex'>
                            <div class="form-check m-3">
                                <input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" checked />Female
                                <label class="form-check-label" for="radio1"></label>
                            </div>
                            <div class="form-check m-3">
                                <input type="radio" class="form-check-input" id="radio2" name="optradio" value="option1" checked />male
                                <label class="form-check-label" for="radio2"></label>
                            </div>
                            <div class="form-check m-3">
                                <input type="radio" class="form-check-input" id="radio3" name="optradio" value="option1" checked />other
                                <label class="form-check-label" for="radio3"></label>
                            </div>
                        </div>
                        <input class="form-control form-control-lg mb-3" type="email" placeholder="PhoneNumber*" aria-label=".form-control-lg example"></input>
                        <input class="form-control form-control-lg mb-3" type="password" placeholder="Password*" aria-label=".form-control-lg example"></input>
                        <input class="form-control form-control-lg mb-3" type="password" placeholder="Confirm Password*" aria-label=".form-control-lg example"></input>
                        <div class="form-check mb-3">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" name="remember" /> Remember me
                            </label>
                        </div>
                        <button type="button" class="btn btn-primary btn-block w-100">SignUp</button>
                    </div>
                </form>
                <div className='d-flex forgot '>
                    <p>Already have an account?SignIn</p>
                </div>
            </div>
        </div>
    )
}

export default SignUp