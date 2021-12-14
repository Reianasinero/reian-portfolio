import React from 'react';
import './Title.css';
import logo from './reian.png';

function Title() {
    return (
        <div className="Title">
            <img className="my-portrait" src={logo} alt="My Portrait" />
            <h1 className="title-text">Reian Asiñero</h1>
            <h3 className="subtitle-text">Front-End Web Developer | Photographer | Graphic Designer</h3>
        </div>
    )
}

export default Title
