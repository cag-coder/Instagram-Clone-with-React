import React from 'react'

function CardComment({username, comment}) {
    return (
        <div style={{marginTop:"0.5rem"}}>
            <p><strong style={{marginRight:"0.3rem"}}>{username}</strong>{comment}</p>
        </div>
    )
}

export default CardComment
