import React from 'react'
import Avatar from '../../Avatar/Avatar'
import "./Profile.css"
function Profile({size,name,username,number,border}) {
    return (
        <div className="profile">
            <Avatar size={size} number={number} border= {border}/>
            <div className="profile__userInfo">
                <h4>{name}</h4>
                <h5>{username}</h5>
            </div>
            <a className="profile__link" href="/">Switch</a>

        </div>
    )
}

export default Profile
