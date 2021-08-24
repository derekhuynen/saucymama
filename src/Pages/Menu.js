import React from "react";
import {menu} from '../JSON/menu'
import '../CSS/menu.css'


const display = Object.entries(menu).map((entry, index) => {
    return(
        <div key={entry[1].name} className={"section"}>
            <div className={"sectionHeader"}>
                <h1>{entry[1].name}</h1>
                <h3>{entry[1].description}</h3>
            </div>
            <div className={"foodDiv"}>
            {entry[1].items.map((item,index)=> {
                return(
                    <div key={item.item} className={"foodItem"}>
                        <div className={"foodItemTop"}>
                            <h3 className={"foodName"}>{item.item}</h3>
                            <h3 className={"foodPrice"}>{item.price}</h3>
                        </div>
                        <h3>{item.description}</h3>
                    </div>
                )
            })}
        </div>
        </div>
    )
});


    export default function Menu() {

        function a(i){ console.log({i}); }



        function looper() {
            for (let i = 0; i < 10; i++) {
                console.log("hello")
                setTimeout(a(i),3000)
            }
        }


        return (
            <div className={"menuContainer"}>


                {looper()}




            </div>

        )

    }