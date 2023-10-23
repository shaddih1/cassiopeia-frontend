import $ from 'jquery';
import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS CSS
const AboutusScreen = () => {
    useEffect(() => {



        $(document).ready(function () {
            console.log('jQuery is working!');
            AOS.init();
        });


    }, []);
    return (
        <>
        <div className="header-1">
            <section className="position-relative hero-9">
                <div className="hero-top">
                    <div className="container">
                        <div className="py-7 row">
                            <div className="rounded mb-4 px-3 py-2 alert d-inline-block">
                                <a href="/dashboard" className="no-alert">
                                    <div className="d-flex align-items-center"><span className="px-2 py-1 badge rounded-pill bg-orange">¡Nuevo!</span><div className="mx-3">Cotiza rápido y sencillo en menos de 10 minutos</div></div>
                                </a>
                            </div>
                            <div className="col">
                                <h1 className="hero-title fw-bold"> Forjando un futuro sostenible a través de la <span className="highlight highlight-warning d-inline-block">eficiencia</span> energética.</h1>
                                <p className="mt-3 fs-24">Tu respuesta segura para tus necesidades de combustibles y energía.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <section className="py-3 position-relative" data-aos="fade-up" data-aos-duration="1000">
            <div className="container">
                <div className="row">
                    <div className="text-center col">
                        <span className="badge-soft-info px-2 py-1 badge rounded-pill">Calidad</span>
                        <h1 className="display-5 fw-medium">Certificaciones</h1>
                        <p className="text-body mx-auto">Comprometidos a <span className="text-dark fw-bold">satisfacer</span> las necesidades energéticas con integridad, seguridad y innovación.</p>
                        <ul className="list-inline">
                            <li className="list-inline-item me-lg-5">
                                <img src="src/assets/images/iso1.png" alt="iso1" className="mb-2 mb-xl-0" height="150" />
                            </li>
                            <li className="list-inline-item me-lg-5">
                                <img src="src/assets/images/iso2.png" alt="iso2" className="mb-2 mb-xl-0" height="150" />
                            </li>
                            <li className="list-inline-item me-lg-5">
                                <img src="src/assets/images/iso3.png" alt="iso3" className="mb-2 mb-xl-0" height="150" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-5 position-relative">
            <div className="container">
                <div className="align-items-center mt-5 row">
                    <div className="col-lg-5">
                        <h1 className="display-5 fw-semibold">¿Quiénes somos?</h1>
                        <p className="text-body my-4">Nuestro compromiso es ofrecer combustibles de alta calidad a precios competitivos, brindando seguridad y confiabilidad a las operaciones de nuestros clientes.</p>
                        <a href="servicios.html" className="me-2 mb-2 mb-xxl-0 btn btn-primary">Nuestros Servicios<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right ms-2 icon-xxs"><g><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></g></svg></a>
                    </div>
                    <div className="col-lg-6 offset-lg-1" data-aos="fade-left" data-aos-duration="1000">
                        <div className="img-content2 position-relative mt-4 mt-lg-0">
                            <div className="img-up mb-lg-0 mb-6">
                                <img src="src/assets/images/cassio-servicio.webp" alt="feature" className="img-fluid d-block shadow" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="position-relative overflow-hidden py-5 pb-lg-7">
            <div className="container">
                <div className="align-items-center row">
                    <div className="col-lg-6">
                        <div className="img-content position-relative">
                            <div className="p-2 mb-lg-0 mb-3" data-aos="fade-right" data-aos-duration="700">
                                <img src="src/assets/images/camion.jpg" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div id="features-list">
                            <div className="d-flex shadow card border rounded">
                                <div className="flex-grow-1 card-body">
                                    <h1 className="display-5 fw-medium">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle icon-dual-success">
                                            <g><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></g>
                                        </svg> Misión
                                    </h1>
                                    <div className="accordion-collapse collapse show">
                                        <div>
                                            <p id="vision" className="text-body mt-1 mb-4 fs-17">Nuestra misión es ser el proveedor confiable en la comercialización de combustibles, ofreciendo productos de alta calidad que impulsen el dinamismo y desarrollo responsable.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex shadow card border rounded">
                                <div className="flex-grow-1 card-body">
                                    <h1 className="display-5 fw-medium">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle icon-dual-success">
                                            <g><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></g>
                                        </svg> Visión
                                    </h1>
                                    <div className="accordion-collapse collapse show">
                                        <div>
                                            <p className="text-body mt-1 mb-4 fs-17">Nuestra visión es servir con un estándar de excelencia, al tiempo que promovemos la adopción responsable de recursos energéticos para un futuro más limpio y próspero.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex shadow card border rounded">
                                <div className="flex-grow-1 card-body">
                                    <h1 className="display-5 fw-medium">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle icon-dual-success">
                                            <g><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></g>
                                        </svg>  Valores
                                    </h1>
                                    <div className="accordion-collapse collapse show">
                                        <div>
                                            <p className="text-body mt-1 mb-4 fs-17">Actuamos con integridad, priorizando la seguridad y la calidad. Nos comprometemos con la sostenibilidad, impulsamos la innovación y nuestro compromiso comunitario.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-3 bg-gradient3 position-relative">
                <div className="container pt-4">
                    <div className="row">
                        <div className="col">
                            <a className="navbar-brand me-lg-4 mb-4 me-auto" href="#">
                                <img src="src/assets/images/logo.png" height="30" className="d-inline-block align-top" alt="" />
                            </a>
                            <h5 className="fw-normal text-muted w-75">Dedicados a la comercialización de petrolíferos a nivel nacional a precios competitivos. Somos una empresa 100% Mexicana.</h5>
                        </div>
                        <div className="col-sm-auto">
                            <div className="ps-md-5">
                                <h6 className="mb-4 mt-5 mt-sm-2 fs-14 fw-semibold text-uppercase">Plataforma</h6>
                                <ul className="list-unstyled">
                                    <li className="my-3"><a href="dashboard.html" className="text-muted">Dashboard</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-auto">
                            <div className="ps-md-5">
                                <h6 className="mb-4 mt-5 mt-sm-2 fs-14 fw-semibold text-uppercase">Empresa</h6>
                                <ul className="list-unstyled">
                                    <li className="my-3"><a href="nosotros" className="text-muted">Nosotros</a></li>
                                    <li className="my-3"><a href="servicios" className="text-muted">Servicios</a></li>
                                    <li className="my-3"><a href="/#contactanos" className="text-muted">Contactanos</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-auto">
                            <div className="ps-md-5">
                                <h6 className="mb-4 mt-5 mt-sm-2 fs-14 fw-semibold text-uppercase">Legal</h6>
                                <ul className="list-unstyled">
                                    <li className="my-3"><a href="#" className="text-muted">Aviso de privacidad</a></li>
                                    <li className="my-3"><a href="#" className="text-muted">Legalidad</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row text-md-start text-center">
                        <div className="col-md-6">
                            <p className="pb-0 mb-0 text-muted"><script>document.write(new Date().getFullYear())</script> © Cassiopeia Petrolíferos. Todos los derechos reservados.</p>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <div className="align-items-end mt-md-0 mt-4">
                                <ul className="list-unstyled mb-0">
                                    <li className="d-inline-block me-4">
                                        <a href=""><i data-feather="facebook" className="icon icon-xs"></i></a>
                                    </li>
                                    <li className="d-inline-block">
                                        <a href=""><i data-feather="linkedin" className="icon icon-xs"></i></a>
                                    </li>
                                </ul>
                            </div>      
                        </div>
                    </div>
                </div>
            </section>

            <a className="btn btn-soft-primary shadow-none btn-icon btn-back-to-top" href='#'><i className="icon-xxs" data-feather="arrow-up"></i></a>
        </>
    );
}
export default AboutusScreen