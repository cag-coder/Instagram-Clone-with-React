import React from 'react'
import "./Avatar.css"

function Avatar({size, number, border}) {

    let imageSize = size ? size : "28"
    let imageNumber = number ? number : "5"
    let image = `https://i.pravatar.cc/${imageSize > 100 ? "28" : imageSize}?img=${imageNumber > 60 ? "3" : imageNumber}`
    return (
        <div className={border ? "avatar__border" : ""}>
            <img  className="avatar__icon" src={image} alt="avatar" />
        </div>
    )
}

export default Avatar
