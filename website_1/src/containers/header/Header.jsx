import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">let's Build Something amazing with GPT-3 Open AI</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum euismod pharetra diam id rutrum.

                </p>
                <div className="gpt3__header-content__input">


                    <input type="email" placeholder="Your Email Address"></input>
                    <button type="button">Get Started</button>
                </div>
                <div className="gpt3__header-content__people">
                    <img src={people} alt="people" />
                    <p>1.600 people requested acces a visit in last 24 hours</p>

                </div>



            </div>
            <div className="gpt3__header-image">
                <img src={ai} alt="ai" /></div>
        </div>
    )
}

export default Header