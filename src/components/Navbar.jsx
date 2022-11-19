import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'>U N W I N D</span>
            <div className='user'>
                <img src="https://media.npr.org/assets/img/2020/06/08/ekask_emma7_slide-095edef5b42d00b43f5e893b1dc4f6a414d542c4-s800-c85.webp" alt="" />
                <span>John</span>
                <button>Sign out</button>
            </div>
        </div>
    )
}

export default Navbar;