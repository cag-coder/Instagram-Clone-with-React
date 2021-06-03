import React from 'react'
import Avatar from "../../Avatar/Avatar"
import Profile from './Profile'
import "./Sidebar.css"
function Sidebar() {
    const users =[
        {
            id:11,
            name:"lorem11 lorem",
            username: "lorem11"
        },
        {
            id:12,
            name:"lorem12 lorem",
            username: "lorem12"
        },
        {
            id:13,
            name:"lorem13 lorem",
            username: "lorem13"
        },
        {
            id:14,
            name:"lorem14 lorem",
            username: "lorem14"
        },
        {
            id:15,
            name:"lorem15 lorem",
            username: "lorem15"
        },]


    return (
        <div className="sidebar">
            <div className="sidebar__user">
                <Profile size={65} name="Cagatay Em" username="Developer"/>
            </div>
            <div className="sidebar__recommendation">
                <div className="recommendation-tittle">
                    <h4>Suggestions for you</h4>
                    <a href="">See all</a>
                </div>
                <div className="recommendation-users">
                    {users.map(user =>
                        <Profile name={user.name} 
                        username={user.username} 
                        number ={user.id} 
                        size={35}
                        border={true}/>
                    )}
                </div>
            </div>
            <div className="sidebar__footer">
                <ul className="sidebar__links">
                    <li>About</li>
                    <li>Help</li>
                    <li>Press</li>
                    <li>API</li>
                    <li>Jobs</li>
                    <li>Privacy</li>
                    <li>Term</li>
                    <li>Locations</li>
                    <li>Top Accounts</li>
                    <li>Hashtags</li>
                    <li>Language</li>
                </ul>
                <div className="sidebar__copyright">
                    @ 2020 INSTAGRAM FROM FACEBOOK
                </div>
            </div>
        </div>
    )
}

export default Sidebar
