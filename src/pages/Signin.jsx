import React from 'react'

const Signin = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
            <span className='logo'>U N W I N D</span>
            <span className='title'>Sign in</span>
                <form>
                    <input type='email' placeholder='Email'/>
                    <input type='password' placeholder='Password'/>
                    <button>Sign in</button>
                </form>
                <p>You don't have an account? Register</p>
            </div>
        </div>
    )      
}

export default Signin;