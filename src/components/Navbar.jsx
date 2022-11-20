import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'>U N W I N D</span>
            <div className='user'>
                <img src= "../images/person5.jpeg" alt="" />
                <span>John</span>
                <button>Sign out</button>
            </div>
        </div>
    )
}

export default Navbar;