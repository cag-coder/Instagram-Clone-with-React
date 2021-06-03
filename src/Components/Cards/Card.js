import React from 'react'
import Avatar from '../Avatar/Avatar'
import Dots from "../../images/more.png"
import "./Card.css"
function Card({username,border}) {
    return (
        <div className="card">
            <div className="card__header">
                <div className="card__user">
                    <Avatar border={border} size={35} />
                    <span>{username}</span>
                </div>
                <img className="card__dots" src={Dots} alt="dots" />
            </div>
            <img  className="card__image" src="https://source.unsplash.com/user/erondu/700x600" alt="" />
        </div>
    )
}

export default Card
