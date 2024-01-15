import React from 'react';
import './cta.css';
import robot_total from '../../assets/robot_total.png';



const Cta = () => {

    return (
        <div className="dravvt__cta section__padding">
            <div className="dravvt__cta__content">
                <div className="dravvt__cta-image">
                    <img src={robot_total} alt="cta" />
                </div>

                <div className="dravvt__cta-heading">
                    <h2 className="gradient__text">Ready to colab?</h2>
                    <p>Let's get started!</p>

                    <div className="dravvt__cta-content_input">
                        <input
                            type="email"
                            id="email"
                            placeholder="Your Email Address"

                        />
                        <button className="button gradient__bg" >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cta;