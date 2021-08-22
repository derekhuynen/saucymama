import React from "react";
import Logo from '../Images/SaucyMamaLogo300.png'
import '../CSS/style.css'
import Button from 'react-bootstrap/Button'


export default function Home() {
    return (
        <div className={"homeContainer"}>
            <div className={"homeBGImage"}>


                <div className={"homeContent"}>
                    <div className={"homeTitle"}>

                        <div className={"homeTitleImage"}>
                            <img src={Logo} alt={"Saucy Mama"}/>
                        </div>

                    </div>

                    <div className={"homeBottomContainer"}>
                        <div className={"center"}>
                            <div className={"box"}>
                                <div className={"boxTop"}>
                                    <h4>(909) 878-0165</h4>
                                    <h4>618 B Pine Knot Ave</h4>
                                    <h4>Big Bear Lake, CA 92315</h4>
                                </div>
                            </div>

                            <div className={"box"}>
                                <div className={"boxTop"}>
                                    <h4>Hours</h4>
                                    <h4>Mon-Tues: 11:00 AM - 8:00 PM</h4>
                                    <h4>Wed-Sun:  11:00 AM - 9:00 PM</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"homeButton"}>
                        <Button className={"button"}>View Menu</Button>
                    </div>

                </div>



            </div>
        </div>

    )
}