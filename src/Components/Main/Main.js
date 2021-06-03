import React from 'react'
import Stories from './Stories/Stories'
import "./Main.css"
import Sidebar from "../Main/Sidebar/Sidebar"

function Main() {
    return (
        <div className="main">
            <div className="main__container">
                <Stories/>
                <Sidebar/>
            </div>
            
        </div>
    )
}

export default Main
