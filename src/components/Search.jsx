import React from 'react';

const Search = () => {
    return (
        <div className='search'>
            <div className='searchForm'>
                <input type="text" placeholder="Find a user"/>
            </div>
            <div className="userChat">
                <img src="https://media.npr.org/assets/img/2020/06/08/ekask_emma7_slide-095edef5b42d00b43f5e893b1dc4f6a414d542c4-s800-c85.webp"></img>
                <div className="userChatInfo">
                <span>Jane</span>
                </div>
            
            </div>
        </div>
    )
}

export default Search;