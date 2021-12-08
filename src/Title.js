import React from 'react';
import './Title.css';
import logo from './reian.png';

function Title() {
    return (
        <div className="Title">
            <img className="my-portrait" src={logo} alt="My Portrait" />
            <h1 className="title-text">Reian Asiñero</h1>
            <h3 className="subtitle-text">Front-End Web Developer | Photographer | Graphic Designer</h3>
            <p className="paragraph-aboutMe">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac odio tempor
                orci dapibus. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur
                adipiscing. Feugiat pretium nibh ipsum consequat. Varius morbi enim nunc faucibus
                a pellentesque sit amet porttitor.</p>
        </div>
    )
}

export default Title