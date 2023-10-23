import $ from 'jquery';
import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS CSS
const Content = () => {
    useEffect(() => {



        $(document).ready(function () {
            console.log('jQuery is working!');
            AOS.init();
        });


    }, []);
    return (
        <>
            <section className="py-5">
                <div className="container" data-aos="fade-up" data-aos-duration="1000">
                    <div class="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="fw-medium pb-3 mt-0">Trabajamos en colaboración con</h2>
                            <ul className="list-inline my-3">
                                <li className="list-inline-item me-4 me-lg-5">
                                    <img src="src/assets/images/pemex-logo.webp" alt="" className="mb-2 mb-xl-0" height="36" />
                                </li>
                                <li className="list-inline-item me-4 me-lg-5">
                                    <img src="src/assets/images/cre-logo.webp" alt="" className="mb-2 mb-xl-0" height="36" />
                                </li>
                                <li className="list-inline-item me-4 me-lg-5">
                                    <img src="src/assets/images/grupotransportes-logo.webp" alt="" className="mb-2 mb-xl-0" height="36" />
                                </li>
                                <li className="list-inline-item me-4 me-lg-5">
                                    <img src="src/assets/images/canacar-logo.webp" alt="" className="mb-2 mb-xl-0" height="36" />
                                </li>
                            </ul>
                        </div>
                    </div>            
                </div>
            </section>

            <section className="pt-lg-6 pt-4 pb-lg-6 pb-5 position-relative optim">
                <div className="container">
                    <div className="row align-items-center mb-6 pb-lg-5">
                        <div className="col-lg-5">
                            <div className="mb-4 mb-lg-0">
                                <span className="badge rounded-pill badge-soft-success px-2 py-1">Servicios de alta calidad</span>
                                <h1 className="display-4 fw-medium mb-3">Tu proveedor confiable de combustible</h1>
                                <p className="text-body mx-auto mb-4 pb-2">
                                    Comprometidos a suministrar combustibles de calidad certificada a precios competitivos.<br></br>Empresa 100% Mexicana que garantiza seguridad y eficiencia en cada entrega.
                                </p>
                                <a href="nosotros.html" className="btn btn-outline-primary">
                                    Más información <i className="icon-xxs ms-1" data-feather="arrow-right"></i>
                                </a>  
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1 ">
                            <img src="src/assets/images/proveedor.png" alt="" className="img-fluid" data-aos="fade-left" data-aos-duration="1000"/>
                        </div>
                    </div>

                    <div className="row align-items-center mb-6 pb-lg-5 ">
                        <div className="col-lg-6">
                            <div className="bg-white p-2 rounded shadow mb-lg-0 mb-3" data-aos="fade-right" data-aos-duration="1500">
                                <img src="src/assets/images/cotizar.png" alt="" className="img-fluid" />
                            </div>
                        </div>

                        <div className="col-lg-5 offset-lg-1">
                            <div className="mt-4 mt-lg-0">
                                <h1 className="display-4 fw-medium mb-3">Tu combustible en un clic</h1>
                                <p className="text-body mx-auto mb-4 pb-3">
                                    Cotizar nunca fue tan rápido y sencillo en menos de 10 minutos. <br></br> Descubre nuestros precios sin compromiso y haga su pedido hoy mismo.
                                </p>
                                <a href="dashboard.html" className="btn btn-outline-primary">
                                    Cotiza rápido <i className="icon-xxs ms-1" data-feather="arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="mb-4 mb-lg-0">
                                <h1 className="display-4 fw-medium mb-3">Conexión Total</h1>
                                <p className="text-body mx-auto mb-4 pb-2">
                                    Para que tu equipo se sienta cómodo, te ofrecemos todos nuestros canales de comunicación.
                                </p>
                                <a href="#" className="btn btn-outline-primary">
                                    Más información <i className="icon-xxs ms-1" data-feather="arrow-right"></i>
                                </a>  
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <img src="src/assets/images/servicio.png" alt="" className="img-fluid" data-aos="fade-left" data-aos-duration="1000"/>
                        </div>
                    </div>
            
                </div>
            </section>

            <section className="my-5 py-6 bg-gradient-img position-relative optim2">
                <div className="container" data-aos="fade-up" data-aos-duration="1500">
                    <div className="row">
                        <div className="col text-center">
                            <span className="badge rounded-pill badge-soft-orange px-2 py-1">Atención 24/7 los 365 días del año</span>
                            <h1 className="display-5 fw-medium text-white">Contamos con cobertura nacional</h1>
                            <p className="text-body-white mx-auto">
                                Estamos <span className="text-orange fw-bold">disponibles</span> en los siguientes estados de la república.
                            </p>
                        </div>
                    </div>

                    <div className="row align-items-center mb-3 pb-lg-3">
                        <div className="col-lg-5 offset-lg-1">
                            <div className="p-2 mb-lg-0 mb-3" data-aos="fade-up" data-aos-duration="2000">
                                <img src="src/assets/images/mapacobertura.webp" alt="cobertura" className="img-fluid" />
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="mt-4 mt-lg-0 text-center" data-aos="fade-up" data-aos-duration="2000">
                                <p className="text-body-white mx-auto mb-4 pb-3">
                                    Tamaulipas, Nuevo León, Estado de México, Veracruz, Campeche, Hidalgo, Quintana Roo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-5 py-5 position-relative" id="contactanos">
                <div className="container" data-aos="fade-up" data-aos-duration="1500">
                    <div className="text-center">
                        <span className="badge rounded-pill badge-soft-primary px-2 py-1">Hablemos más</span>
                        <h1 className="display-5 fw-medium">Contáctanos</h1>
                        <p className="text-body mx-auto">
                            Por favor <span className="text-primary fw-bold">complete</span> el siguiente formulario y nos comunicaremos con usted en breve.
                        </p>
                    </div>
                    <div className="align-items-center row">
                        <div className="col text-center ">
                            <form>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="col-md-12">
                                            <div className="mb-1">
                                                <label className="form-label">Nombre o Razón social</label>
                                                <input placeholder="Nombre" name="nombre" type="name" id="name" className="form-control" required></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-1">
                                            <label className="form-label">Combustible de interés</label>
                                            <select className="form-select" name="combustible_interes" required>
                                                <option value="" disabled="">Seleccione un combustible</option>
                                                <option value="Diesel Automotriz">Diesel Automotriz</option>
                                                <option value="Diesel Ultra bajo azufre">Diesel Ultra bajo azufre</option>
                                                <option value="Gasolina Regular">Gasolina Regular</option>
                                                <option value="Gasolina Premium">Gasolina Premium</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-1">
                                        <label className="form-label">Telefono</label>
                                        <input placeholder="Tu telefono" name="telefono" type="phone" id="phone" className="form-control"></input>
                                    </div> 
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-1">
                                            <label className="form-label">Correo</label>
                                            <input placeholder="Tu correo electrónico" name="correo" type="femail" id="femail" className="form-control" required="@"></input>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-1">
                                            <label className="form-label">Mensaje</label>
                                            <textarea placeholder="Escribe tu mensaje..." name="mensaje" rows="5" type="textarea" id="message" className="form-control" required></textarea>
                                        </div>
                                    </div>
                                    <div className="mb-0 col-lg-auto">
                                        <button type="submit" className="btn btn-primary">Enviar 
                                            <span className="icon icon-xs text-white ms-1">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-send "><g><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></g></svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="shadow card">
                                <div className="card-body">
                                    <div className="d-flex text-align start">
                                        <span className="bg-soft-primary avatar avatar-sm rounded icon icon-with-bg icon-xs text-primary me-3 flex-shrink-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail icon-dual-primary"><g><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></g></svg></span>
                                        <div className="flex-grow-1">
                                            <h5 className="mt-0">Correo</h5>
                                            <p className="mb-0">
                                                <a href="mailto:ventas@cassiopeia.com.mx">ventas@cassiopeia.com.mx</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow card">
                                <div className="card-body">
                                    <div className="d-flex text-align start">
                                        <span className="bg-soft-orange avatar avatar-sm rounded icon icon-with-bg icon-xs text-info me-3 flex-shrink-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-map-pin icon-dual-orange"><g><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></g></svg></span>
                                        <div className="flex-grow-1">
                                            <h5 className="mt-0">Dirección</h5>
                                            <p className="mb-0">Av. Insurgentes Sur 1571, San José Insurgentes, Benito Juárez, 03900 Ciudad de México, CDMX</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow card">
                                <div className="card-body">
                                    <div className="d-flex text-align start">
                                        <span className="align-self-center bg-soft-info avatar avatar-sm rounded icon icon-with-bg icon-xs text-primary me-4 flex-shrink-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-smile icon-dual-info"><g><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></g></svg></span>
                                        <div className="flex-grow-1">
                                            <h5 className="mt-0">Atención al cliente</h5>
                                            <p className="mb-0">+52 55 4937 0469</p>
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
};
export default Content;