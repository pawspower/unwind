import React from 'react';
// import Cam from "";
// import Add from "";
// import More from "";
import Messages from './Messages'
import Input from './Input'

const Chats = () => {
    return (
        <div className='chat'>
            <div className='chatInfo'>
                <span>Jane</span>
                <div className='chatIcons'>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chats;