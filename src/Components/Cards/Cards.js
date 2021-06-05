import React from 'react'
import Card from './Card'
import "./Cards.css"
function Cards() {
    const users =[
        {
            id:11,
            username: "lorem11",
            image: "https://source.unsplash.com/collection/42/700x600"
        },
        {
            id:12,
            username: "lorem12",
            image: "https://source.unsplash.com/collection/4/700x600"
        },
        {
            id:13,
            username: "lorem13",
            image: "https://source.unsplash.com/collection/52/700x600"
        },
        {
            id:14,
            username: "lorem14",
            image: "https://source.unsplash.com/collection/12/700x600"
        },
        {
            id:15,
            username: "lorem15",
            image: "https://source.unsplash.com/collection/783/700x600"
        },]


    return (
        <div className="cards">
            {
                users.map(user=>
                    <Card key={user.id} username={user.username} image={user.image} border={true}/>)
            }
        </div>
    )
}

export default Cards
