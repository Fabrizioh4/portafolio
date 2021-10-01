import React from 'react';
import "./Cover.css";
import CoverVideo from '../../media/CoverVideo.mp4';

const cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={CoverVideo} autoPlay loop muted />
            <h1>Fabrizio Masiero</h1>
            <p>Developer</p>
        </div>
    )
}

export default cover