import React from 'react'
import Avatar from "../../Avatar/Avatar"
import "./Story.css"

function Story({size, number, border,username}) {
    return (
        <div className="story">
            <Avatar size={size} number= {number} border={border}/>
            <span className="story__username">{username}</span>
        </div>
    )
}

export default Story
