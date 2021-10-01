import React from 'react';
import "./Slider.css";

const slidesInfo=[
    {
        src:"https://i.gyazo.com/a320630f295764cba99193bf21c3dc28.png",
        alt:"Mi Proyecto Favorito",
        desc: "Mi Primer Proyecto Favorito",
        url:"https://tuhora.netlify.app/"
        

    },
    {
        src:"https://i.gyazo.com/8efa3f6c8740fd75baffe920cab9c497.png",
        alt:"hola",
        desc: "hi"
    },
    {
        src:"https://i.gyazo.com/b76b1a3672e98d09fdeef86982b29ba7.png",
        alt:"MiPro",
        desc:"hi"
    }
]


const slides = slidesInfo.map(slide => (
    <div className="slide-container">
        <a href={slide.url} target="_blank"rel="noreferrer">
            <img src={slide.src} alt={slide.alt}/>
        </a>
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>  
))

export default slides;