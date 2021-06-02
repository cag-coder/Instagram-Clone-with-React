import React from 'react'
import Story from './Story'
import HorizontalScroll from 'react-scroll-horizontal'

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
    ]


    return (
        <div>
            {
                users.map(user =>
                    <Story username={user.username} size={35} number={user.id} border={true}/>
                    )
            }
        </div>
    )
}

export default Stories
