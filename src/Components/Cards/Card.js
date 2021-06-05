import React from 'react'
import Avatar from '../Avatar/Avatar'
import Dots from "../../images/more.png"
import Heart from "../../images/heart.png"
import Chat from "../../images/chat.png"
import Send from "../../images/send.png"
import Save from "../../images/save.png"
import "./Card.css"
import CardComment from './CardComment'


function Card({username,border,image}) {
    const users =[
        {
            id:17,
            username: "lorem17",
            comment:"Lorem ipsum dolor, sit amet consectetur adipisicing elit"
        },
        {
            id:18,
            username: "lorem18",
            comment:"😂😂😂"
        },
        {
            id:19,
            username: "lorem19",
            comment:"Lorem ipsum dolor, sit amet consectetur 🚀"
        }
    ]


    return (
        <div className="card">
            <div className="card__header">
                <div className="card__user">
                    <Avatar border={border} size={35} />
                    <span>{username}</span>
                </div>
                <img className="card__dots" src={Dots} alt="dots" />
            </div>
            <img  className="card__image" src={image} alt="" />
            <div className="card__body">
                <div className="card__icons">
                    <div className="card__icons-first">
                        <img className="card__icon" src={Heart} alt="heart" />
                        <img className="card__icon" src={Chat} alt="chat" />
                        <img className="card__icon" src={Send} alt="chat" />
                    </div>
                    <div className="card__icons-second">
                        <img className="card__icon" src={Save} alt="save" />
                    </div>
                </div>
                <h4 className="card_views">33,333 views</h4>
                <div className="card__comments">
                    {users.map(user=> 
                        <CardComment key={user.id} username={user.username} comment={user.comment}/>)}
                </div>
                <p className="card__time">1 day ago</p>
            </div>
            <div className="card__addComment">
                <p>Add a comment</p>
                <p>Share</p>  
            </div>
        </div>
    )
}

export default Card
