import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import card from "./image/100.jpg";
import Slider from "react-slick";
import React, { Component } from 'react'

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="demo">
                <h2> Single Item</h2>
                <Slider {...settings}>
                    <div>
                        <img src={card} />
                    </div>
                    <div>
                    <img src={card} />
                    </div>
                    <div>
                    <img src={card} />
                    </div>
                    <div>
                    <img src={card} />
                    </div>
                    <div>
                    <img src={card} />
                    </div>
                    <div>
                    <img src={card} />
                    </div>
                </Slider>
            </div>
        );
    }
}