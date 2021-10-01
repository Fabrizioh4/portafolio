import React from 'react';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Slides from "./Slides"
import "./Slider.css"


const Slider = () => {
    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2>Mis Proyectos</h2>
            </div>
            <Carousel
                plugins={[
                    'infinite',
                    'arrows',
                        {
                        resolve: slidesToShowPlugin,
                        options: {
                        numberOfSlides: 1
                        }
                        },
                        ]}
                slides={Slides}
                breakpoints={{
                        960:{
                            
                            plugins: [
                                'infinite',
                             {
                               resolve: slidesToShowPlugin,
                               options: {
                                numberOfSlides: 1
                                    }
                                },
                            ]
                                    
                          }
                        
                    }}
                    />    
        </div>
    )
}

export default Slider
