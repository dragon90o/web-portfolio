import React from 'react';
import { Cta } from '../../components';
import { Blog, Footer, Header, Projects } from '../../containers';
import './dravvtpage.css';

const DravvtPage = () => {
    return (

        <div className="App">
            <div className="gradient__bg">
                <Header />

            </div>
            <Blog />
            <Cta />
            <Projects />
            <Footer />
        </div>

    );
}

export default DravvtPage;
