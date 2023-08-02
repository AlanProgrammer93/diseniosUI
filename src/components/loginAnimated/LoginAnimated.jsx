import React from 'react'
import './LoginAnimated.css'

const LoginAnimated = () => {
  return (
    <div className='box_LA'>
        <span className='borderline_LA'></span>
        <form>
            <h2>Sign In</h2>
            <div className='inputBox_LA'>
                <input type='text' required="required" />
                <span>Username</span>
                <i></i>
            </div>
            <div className='inputBox_LA'>
                <input type='password' required="required" />
                <span>Password</span>
                <i></i>
            </div>
            <div className='links_LA'>
                <a href='#'>Forgot Password</a>
                <a href='#'>Sign Up</a>
            </div>
            <input type='submit' value="Login" />
        </form>
    </div>
  )
}

export default LoginAnimated