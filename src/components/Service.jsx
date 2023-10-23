import $ from 'jquery';
import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS CSS
const Service = () => {
    useEffect(() => {



        $(document).ready(function () {
            console.log('jQuery is working!');
            AOS.init();
        });


    }, []);
    return (
        <><div className='header-2'>
            <section className="position-relative overflow-hidden pb-2 pt-4">
                <div className="container">
                    <div className="align-items-center text-center text-sm-start row py-4">
                        <div className="rounded text-center mb-4 px-3 py-2 alert d-inline-block">
                            <a href="/dashboard" className="no-alert">
                                <div className="d-flex align-items-center"><span className="px-2 py-1 badge rounded-pill bg-orange">¡Nuevo!</span><div className="mx-3">Cotiza rápido y sencillo en menos de 10 minutos</div></div>
                            </a>
                        </div>
                        <div className="col-lg-5">
                            <h1 className="mt-0 mb-4 pb-2 hero-title">Nuestros <span className="highlight highlight-warning d-inline-block">servicios</span></h1>
                            <p className="fs-24 mt-4">Tu socio confiable en la industria del combustible; Ofreciendo calidad y eficiencia.</p>
                        </div>
                        <div className="hero-right col-lg-7 col-md-6">
                            <div className="img-container text-end" data-aos="fade-left" data-aos-duration="1000">
                                <img src="src/assets/images/servicios.jpg" alt="Cassiopeia Inicio" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <section className="py-5 mt-5 career-service position-relative">
            <div className="container">
                <div className="row">
                    <div className="text-center col">
                        <span className="px-2 py-1 badge rounded-pill bg-orange">Servicios de alta calidad</span>
                        <h1 className="display-5 fw-semibold">Compromiso con excelencia y confiabilidad</h1>
                        <p className="text-body mx-auto">Contamos con múltiples servicios conoce algunos de ellos.</p>
                    </div>
                </div>
                <div className="row">
                    <div data-aos="fade-up" data-aos-duration="700" className="col-lg-6">
                        <div className="d-flex align-items-top pe-sm-5 mt-lg-5 mt-4">
                            <span className="bg-soft-primary avatar avatar-md rounded icon icon-with-bg icon-sm text-primary me-4 flex-shrink-0">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-dollar-sign icon-dual-primary">
                                    <g><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></g>
                                </svg>
                            </span>
                            <div className="flex-grow-1">
                                <h4 className="mt-0">Seguridad y confiabilidad garantizadas</h4>
                                <p className="text-body fs-16 mb-0">Nuestro equipo está aquí para ti, listo para brindarte apoyo constante y profesional en cada paso del camino.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="700" className="col-lg-6">
                        <div className="d-flex align-items-top pe-sm-5 mt-lg-5 mt-4">
                            <span className="bg-soft-primary avatar avatar-md rounded icon icon-with-bg icon-sm text-primary me-4 flex-shrink-0">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users icon-dual-primary"><g><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></g>
                                </svg>
                            </span>
                            <div className="flex-grow-1">
                                <h4 className="mt-0">Personal altamente capacitado</h4>
                                <p className="text-body mb-0 fs-16">Nuestro equipo, siempre en constante formación, se esfuerza por brindarte el mejor servicio desde el primer contacto hasta la entrega de combustible.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="position-relative overflow-hidden py-6 features-3">
            <div className="container">
                <div className="align-items-center row">
                    <div className="col-lg-5">
                        <div className="mb-lg-0 mb-4" data-aos="fade-right" data-aos-duration="600">
                            <h1 className="display-5 fw-medium mb-4">Combustibles con respaldo de laboratorios certificados</h1>
                            <p className="text-body mx-auto mt-0 mb-4 pb-3">Combustibles certificados con documentación de calidad bajo la NOM está a tu alcance. Tu confianza es nuestra prioridad.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1">
                        <img src="src/assets/images/cargando.png" alt="desktop1" className="img-fluid" data-aos="fade-left" data-aos-duration="700" />
                    </div>
                </div>
                <div className="align-items-center pt-9 row">
                    <div className="col-lg-6">
                        <div className="bg-white p-2 rounded border shadow" data-aos="fade-right" data-aos-duration="600">
                            <img src="src/assets/images/cassiopeia-cap.png" alt="desktop" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <div className="mt-4 mt-lg-0" data-aos="fade-left" data-aos-duration="700">
                            <h1 className="display-5 fw-medium mb-4">Equipos en comodato</h1>
                            <h5 className="fw-normal text-body mx-auto mt-0 mb-4 pb-3">Optimiza tu flotilla con nuestra estación de autoconsumo en comodato. Mayor productividad, seguridad y control para tu negocio.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-4">
            <div data-aos="fade-up" data-aos-duration="700" className="border p-5 rounded-lg shadow container">
                <div className="align-items-center row">
                    <div className="col-lg-8 text-center">
                        <h2>Excelencia en Hidrocarburos</h2>
                        <ul className="list-inline">
                            <li className="list-inline-item bg-success rounded p-2 me-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star text-white">
                                    <g>
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </g>
                                </svg>
                            </li>
                            <li className="list-inline-item bg-success rounded p-2 me-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star text-white">
                                    <g>
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </g>
                                </svg>
                            </li>
                            <li className="list-inline-item bg-success rounded p-2 me-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star text-white">
                                    <g>
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </g>
                                </svg>
                            </li>
                            <li className="list-inline-item bg-success rounded p-2 me-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star text-white">
                                    <g>
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </g>
                                </svg>
                            </li>
                            <li className="list-inline-item bg-success rounded p-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star text-white">
                                    <g>
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </g>
                                </svg>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <div className="text-lg-center mt-5">
                            <a className="btn btn-orange rounded" href="dashboard">Cotiza Ahora sin Compromiso
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right icon-xs ms-1">
                                    <g>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </g>
                                </svg>
                            </a>
                            <p className="text-muted mt-2 fs-12">Cotizar en menos de 10 minutos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="position-relative overflow-hidden py-6 features-3">
            <div className="container">
                <div className="align-items-center row">
                    <div className="col-lg-5">
                        <div className="mb-lg-0 mb-4" data-aos="fade-right" data-aos-duration="600">
                            <h1 className="display-5 fw-medium mb-4">Colocación de tanques de autoconsumo</h1>
                            <h5 className="fw-normal text-body mx-auto mt-0 mb-4 pb-3">Optimiza costos con nuestra colocación de tanques de autoconsumo. Los mejores precios, monitoreo 24/7 y surtido automatizado con la máxima calidad.</h5>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1">
                        <img src="src/assets/images/tanquedeautoconsumo.webp" alt="desktop1" className="img-fluid" data-aos="fade-left" data-aos-duration="700" />
                    </div>
                </div>
                <div className="align-items-center pt-9 row">
                    <div className="col-lg-6">
                        <div className="p-2 rounded" data-aos="fade-right" data-aos-duration="600">
                            <img src="src/assets/images/camion.webp" alt="desktop" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <div className="mt-4 mt-lg-0" data-aos="fade-left" data-aos-duration="700">
                            <h1 className="display-5 fw-medium mb-4">Sinergia con compañías de transporte especializado</h1>
                            <h5 className="fw-normal text-body mx-auto mt-0 mb-4 pb-3">Potencia tu logística con nuestra sinergia junto a empresas de transporte especializado. Operadores comprometidos con tiempos de entrega y la seguridad en cada descarga.</h5>
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
                                    <li className="my-3"><a href="dashboard" className="text-muted">Dashboard</a></li>
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

            <a className="btn btn-soft-primary shadow-none btn-icon btn-back-to-top" href='#'><i className="icon-xxs" data-feather="arrow-up"></i></a></>
    );
};
export default Service;