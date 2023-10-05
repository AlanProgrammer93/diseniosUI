import React from 'react'
import './AnimatedGlassmorphismLoginRegistration.css'

const AnimatedGlassmorphismLoginRegistration = ({ setBackground }) => {
    return (
        <div className='container_AGL'>
            <span></span>
            <span></span>
            <span></span>
            <form id='signinForm'>
                <h2>Login</h2>
                <div className='inputBox_AGL'>
                    <input type='text' placeholder='Username' />
                </div>
                <div className='inputBox_AGL'>
                    <input type='password' placeholder='Password' />
                </div>
                <div className='inputBox_AGL group_AGL'>
                    <a href='#'>Forgot Password</a>
                    <a href='#' id='signup' onClick={() => setBackground(false)}>Signup</a>
                </div>
                <div className='inputBox_AGL'>
                    <input type='submit' value="Sign in" />
                </div>
            </form>

            <form id='signupForm'>
                <h2>Registration</h2>
                <div className='inputBox_AGL'>
                    <input type='text' placeholder='Username' />
                </div>
                <div className='inputBox_AGL'>
                    <input type='text' placeholder='Email' />
                </div>
                <div className='inputBox_AGL'>
                    <input type='password' placeholder='Create Password' />
                </div>
                <div className='inputBox_AGL'>
                    <input type='password' placeholder='Confirm Password' />
                </div>
                
                <div className='inputBox_AGL'>
                    <input type='submit' value="Register Account" />
                </div>
                <div className='inputBox_AGL group'>
                    <a>Already Have an Account? <b onClick={() => setBackground(true)}>Login</b> </a>
                </div>
            </form>
        </div>
    )
}

export default AnimatedGlassmorphismLoginRegistration