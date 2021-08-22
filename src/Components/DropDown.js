import React from "react"
import '../CSS/dropDown.css'
import {Link} from "react-router-dom";


export default function  DropDown(){

    return (
        <div className={"dropDownContainer"}>
            <div className={"dropDownLink"}>
                <Link to='/home'>Home</Link>
            </div>
            <div className={"dropDownLink"}>
                <Link to='/menu'>Menu</Link>
            </div>
        </div>

    )
}