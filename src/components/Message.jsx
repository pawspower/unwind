import React from 'react';

const Message = () => {
    return (
        <div className='message owner'>
            <div className='messageInfo'>
                <img src="../images/person5.jpeg"
                alt=""                   
                />
            <span>just now</span>

        </div>
        <div className='messageContent'>
            <p>hello</p>
            <img src="../images/person5.jpeg"
            alt=""
            />
        </div>
        </div>
    )
}

export default Message;