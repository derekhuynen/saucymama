import React, {useState} from "react";
import { Icon } from '@iconify/react';
import hamburgerMenu from '@iconify/icons-radix-icons/hamburger-menu';
import 'bootstrap/dist/css/bootstrap.css'
import Logo from '../../Images/SaucyMamaLogo300.png'
import '../../CSS/header.css'
import {Link, useHistory} from "react-router-dom";
import DropDown from "../DropDown";



export default function Header(){
    const [expand, setExpand] = useState(false);
    const history = useHistory();

    return(
        <div className='header'>
            <div className={"brand"}>
                    <img
                        onClick={() => history.push('/')}
                        src= {Logo}
                        alt="Pines Cabins, Big Bear Lake, Cabin Management"
                    />
            </div>

            <div className={"linkContainer"}>
                <div className={"links"}>
                    <Link to='/'>Home</Link>
                </div>
                <div className={"links"}>
                    <Link to='/menu'>Menu</Link>
                </div>


                <div className={"headerLeft"}>
                    <div className={"number"}>
                        <h4>(909) 878-0165</h4>
                    </div>
                    <div className={"hamburger"}>
                        <Icon onClick={()=> setExpand(false)} icon={hamburgerMenu} color="white" width="30" height="30"/>
                    </div>
                </div>
            </div>


            {(expand) ? <DropDown/>  : console.log("false")}

        </div>

    )
}