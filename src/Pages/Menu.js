import React, {useEffect, useState} from "react";
import '../CSS/menu.css'
import {menu} from '../JSON/menu'




const sections = (sectionItems,height) => {
    return (
            <div className={"section-container"} >
                <h2>{sectionItems.name}</h2>
                <div className={"food-container"} style={{height: height}}>
                    {sectionItems.items.map((sectionItem)=> {
                        return (

                            <div className={"food-item"}>
                                <h3>{sectionItem.item}</h3>
                                <h4>{sectionItem.price}</h4>
                                <p>{sectionItem.description}</p>
                            </div>
                        )

                    })}
                </div>


            </div>
        )

}


export default function Menu() {



    return (
        <div className={"menu-container"}>

            {console.log(menu)}
            {sections(menu["Appetizers"], 650)}
            {sections(menu["SpecialtiesPizzas"], 400)}
            {sections(menu["FavesPizzas"], 400)}

        </div>

    )
}

