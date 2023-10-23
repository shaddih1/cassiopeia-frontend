import $ from 'jquery';
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import * as L from '../../node_modules/leaflet/dist/leaflet-src';


    
const Hero = () => {
    
    useEffect(() => {
        const typed = new Typed('.typed', {
            strings: ['mañana', 'seguro', 'veloz'],
            typeSpeed: 75,
            startDelay: 300,
            backSpeed: 75,
            loop: true,
            loopCount: 10,
            showCursor: false,
            contentType: "html",
        })

        $(document).ready(function () {
            console.log('jQuery is working!');
            AOS.init();

 
        });

    }, []);
    return (
            <div className="header-7">
                <section className="hero-4 pt-7 pb-3 py-sm-6">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-6">
                                <h1 className="hero-title">
                                    Hazlo fácil, abastece <span className="highlight highlight-warning d-inline-block typed"></span>
                                </h1>
                                <p className="mt-4 fs-24">
                                    Revolucionando la forma de comprar combustibles. Precios a la vista, pedidos a medida.
                                </p>

                                <div className="pt-3 pt-sm-5 margin-down">
                                    <a href="dashboard">
                                    <button className="btn btn-primary btn-md">Empieza Ahora <i className="icon-xxs ms-1" data-feather="arrow-right"></i></button>
                                    </a>
                                </div>
                            </div>
                            <div className="hero-right col-lg-7 col-md-6">
                                <div className="img-container text-end" data-aos="fade-left" data-aos-duration="1000">
                                    <img src="src/assets/images/isometric.webp" alt="Cassiopeia Inicio" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shape bottom">
                        <svg width="1440px" height="40px" viewBox="0 0 1440 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="shape-b" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="curve" fill="#fff">
                                    <path d="M0,30.013 C239.659,10.004 479.143,0 718.453,0 C957.763,0 1198.28,10.004 1440,30.013 L1440,40 L0,40 L0,30.013 Z" id="Path"></path>
                                </g>
                            </g>
                        </svg>
                    </div>
                </section>
            </div>
    );
};
export default Hero;