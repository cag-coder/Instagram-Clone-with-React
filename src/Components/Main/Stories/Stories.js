import React from 'react'
import Story from './Story'
import HorizontalScroll from 'react-scroll-horizontal'
import "./Stories.css"

function Stories() {
    const users =[
    {
        id:1,
        name:"lorem1 lorem",
        username: "lorem1"
    },
    {
        id:2,
        name:"lorem2 lorem",
        username: "lorem2"
    },
    {
        id:3,
        name:"lorem3 lorem",
        username: "lorem3"
    },
    {
        id:4,
        name:"lorem4 lorem",
        username: "lorem4"
    },
    {
        id:5,
        name:"lorem5 lorem",
        username: "lorem5"
    },
    {
        id:6,
        name:"lorem6 lorem",
        username: "lorem16"
    },
    {
        id:7,
        name:"lorem7 lorem",
        username: "lorem7"
    },
    {
        id:8,
        name:"lorem7 lorem",
        username: "lorem8"
    },
    {
        id:9,
        name:"lorem7 lorem",
        username: "lorem9"
    },
    ]


    return (
        <div className="stories">
            <HorizontalScroll>
                {
                    users.map(user =>
                        <Story username={user.username} size={60} number={user.id} border={true}/>
                    )
                }
            </HorizontalScroll>
        </div>
    )
}

export default Stories
