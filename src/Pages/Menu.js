import React, {useEffect, useState} from "react";
import '../CSS/menu.css'
import {menu} from '../JSON/newMenu'



const calcPrices = (name,prices) => {

    if(prices.length === 1){
        return(
            <div className={"pricingOne"}>
                <h3>{name}</h3>
                <h4>${prices[0]}</h4>
            </div>


        )
    }else if(prices.length === 2){
        return(
            <div className={"pricing"}>
                <h3>{name}</h3>
                <h4>Small: ${prices[0]}, Large: ${prices[1]}</h4>
            </div>
        )
    }else{
        return null;
    }

}



const sections = (sectionItems,height) => {
    return (
            <div className={"section-container"} >
                <h2>{sectionItems.name}</h2>
                <div className={"food-container"} style={{height: height}}>
                    {sectionItems.items.map((sectionItem)=> {
                        return (

                            <div className={"food-item"}>
                                {calcPrices(sectionItem.item,sectionItem.price)}
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
            {sections(menu["Appetizers"], 570)}

        </div>

    )
}

