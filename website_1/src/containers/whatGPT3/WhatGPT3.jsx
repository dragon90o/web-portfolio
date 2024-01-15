import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatgpt3.css';

const WhatGPT3 = () =>
(
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
        <div className="gpt3__whatgpt3-feature">
            <Feature title="what is GPT-3" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod pharetra diam id rutrum. Praesent ex massa, venenatis eget nunc a, faucibus sollicitudin justo. Pellentesque sodales commodo sapien," />
        </div>
        <div className="gpt3__whatgpt3-heading">
            <h1 className="gradient__text">the possibilities are beyond your imagination</h1>
            <p>Explore the library</p>

        </div>
        <div className="gpt3__whatgpt3-container">
            <Feature title="Chatbots" text="Vestibulum sed urna nec diam iaculis porta id non lacus. Maecenas mi risus, pretium non placerat et, dignissim aliquet nisi" />
            <Feature title="Knowledgebase" text="Mauris ultricies tincidunt purus, scelerisque tempor mauris finibus a. Suspendisse" />
            <Feature title="Education" text="ras quis urna orci. Ut laoreet aliquet arcu. Integer hendrerit tortor id urna placerat, sit amet scelerisque risus pretium. Aliquam eleifend ac velit vel consequat." />
        </div>
    </div>
);


export default WhatGPT3