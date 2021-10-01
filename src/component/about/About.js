import React from 'react';
import './About.css';
import MyPhoto from '../../media/MyPhoto.jpeg';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Mi nombre es Fabrizio Agustin Masiero </h3>
                <p>Tengo 20 años. Estudio por mi cuenta Desarrollo Web, aprendo rapido y me relaciono bien con nuevas personas. </p>
            </div>
            <div className="about-img">
                <img src={MyPhoto} alt="about" />
            </div>
        </div>
    )
}

export default About
