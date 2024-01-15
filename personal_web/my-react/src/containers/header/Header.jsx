import React from 'react'
import './header.css'
import hand from '../../assets/hand.svg'
import robot_face from '../../assets/robot_face.png'

const Header = () => {
    return (

        <div className="dravvt__header section__padding-header" id="home">
            <div className="dravvt__header-content">
                <div className="dravvt__header-content_sticker">
                    <p>Hello, i'm Dravvt</p>
                    <img src={hand} alt="Dravvt" />
                </div>
                <h1>
                    <span className="dravvt__header-content_h1-part1">Robotic Engineer</span>
                    <br />
                    <span className="dravvt__header-content_h1-part2 gradient__text">& Sculptor</span>
                    <br />
                    <span className="dravvt__header-content_h1-part3">based in Berlin, Germany </span>
                </h1>

                <div className="dravvt__header-content__btn">
                    <button type="button" className="dravvt__header-content__btn-1">Projects</button>
                    <button type="button" className="dravvt__header-content__btn-2"> Articles</button>
                </div>
            </div>
            <div className="dravvt__header-image">
                <img src={robot_face} alt="robot_face" />
            </div>

        </div>
    )



}

export default Header