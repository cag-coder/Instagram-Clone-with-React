import React from 'react'
import Avatar from "../../Avatar/Avatar"


function Story({size, number, border,username}) {
    return (
        <div>
            <Avatar size={size} number= {number} border={border}/>
            <span>{username}</span>
        </div>
    )
}

export default Story
