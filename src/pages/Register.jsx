import React from 'react'

const Register = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
            <span className='logo'>U N W I N D</span>
            <span className='title'>Register</span>
                <form>
                    <input type='text' placeholder='Display Name'/>
                    <input type='email' placeholder='Email'/>
                    <input type='password' placeholder='Password'/>
                    <input type='file' id="file" />
                    <button>Sign up</button>
                </form>
                <p>You do have an account? Sign in</p>
            </div>
        </div>
    )      
}

export default Register;