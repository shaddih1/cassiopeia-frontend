import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css';
import { MdDashboard, MdClose, MdReceiptLong, MdInsights, MdQuiz, MdCalculate, MdContactSupport, MdLogout, MdAnalytics, MdBarChart, MdStackedLineChart, MdMenu } from 'react-icons/md';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';




const Dashboard = () => {
    const { userInfo } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutApiCall] = useLogoutMutation();

    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap();
            dispatch(logout());
            navigate('/login');
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <>
        <div className="py-sm-4 px-0 px-sm-3 bg-light vh-100">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-2 col-md-3">
                        <div className="px-0 px-sm-4 d-none d-md-block">
                            <h3>Dashboard</h3>
                            <ul className="nav navtab-bg nav-pills flex-column">
                                <li className="nav-item">
                                    <a href="/dashboard" className="nav-link active">
                                        <span className="icon-xs me-1 flex-shrink-0">
                                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <rect fill="#335EEA" x="4" y="4" width="7" height="7" rx="1.5"></rect>
                                                <path fill="#335EEA" d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"></path>
                                            </svg> Dashboard
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item my-2">
                                    <a href="#" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
                                        <span class="icon-xs me-1 flex-shrink-0">
                                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                <title>Stockholm-icons / Files / Group-folders</title>
                                                <desc>Created with Sketch.</desc>
                                                <g id="Stockholm-icons-/-Files-/-Group-folders" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                    <path d="M4.5,21 L21.5,21 C22.3284271,21 23,20.3284271 23,19.5 L23,8.5 C23,7.67157288 22.3284271,7 21.5,7 L11,7 L8.43933983,4.43933983 C8.15803526,4.15803526 7.77650439,4 7.37867966,4 L4.5,4 C3.67157288,4 3,4.67157288 3,5.5 L3,19.5 C3,20.3284271 3.67157288,21 4.5,21 Z" id="Combined-Shape" fill="#335EEA" opacity="0.3"></path>
                                                    <path d="M2.5,19 L19.5,19 C20.3284271,19 21,18.3284271 21,17.5 L21,6.5 C21,5.67157288 20.3284271,5 19.5,5 L9,5 L6.43933983,2.43933983 C6.15803526,2.15803526 5.77650439,2 5.37867966,2 L2.5,2 C1.67157288,2 1,2.67157288 1,3.5 L1,17.5 C1,18.3284271 1.67157288,19 2.5,19 Z" id="Combined-Shape-Copy" fill="#335EEA"></path>
                                                </g>
                                            </svg> Herramientas
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/cotizador" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
                                        <span className="icon-xs me-1 flex-shrink-0">
                                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <rect fill="#335EEA" x="4" y="5" width="16" height="3" rx="1.5"></rect>
                                                <path fill="#335EEA" d="M5.5,15 L18.5,15 C19.3284271,15 20,15.6715729 20,16.5 C20,17.3284271 19.3284271,18 18.5,18 L5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 Z M5.5,10 L12.5,10 C13.3284271,10 14,10.6715729 14,11.5 C14,12.3284271 13.3284271,13 12.5,13 L5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 Z"></path>
                                            </svg> Cotizador
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
                                        <span className="icon-xs me-1 flex-shrink-0">
                                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <rect fill="#335EEA" opacity="0.3" x="13" y="4" width="3" height="16" rx="1.5"></rect>
                                                <rect fill="#335EEA" x="8" y="9" width="3" height="11" rx="1.5"></rect>
                                                <rect fill="#335EEA" x="18" y="11" width="3" height="9" rx="1.5"></rect>
                                                <rect fill="#335EEA" x="3" y="13" width="3" height="7" rx="1.5"></rect>
                                            </svg> Precio en bomba
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
                                        <span>Salir</span>
                                    </a>
                                </li>
                                <li>
                                    {userInfo ? (<>
                                    <a to='/login' className={styles.logout}>
                                        <MdLogout onClick={logoutHandler} />
                                        <h3 onClick={logoutHandler} >Salir</h3>
                                    </a>
                                    <a onClick={logoutHandler}>
                                        Salir
                                    </a>
                                    </>) : (<>
                                    </>)}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-10 col-md-9 align-items-center">
                        <div className="row">
                            <div className="col-8">
                                <div className="card" id="color-palette">
                                    <div className="card-body">
                                        <h3 className="my-0">Tu combustible en un clic, cotiza rápido</h3>
                                        <br/>
                                        <div className="container">
                                            <table id="recent-orders--table">
                                                <thead>
                                                    <tr>
                                                        <th className="col-md-1">
                                                            <h4 className="mt-2">Nombre del producto</h4>
                                                            <hr />
                                                        </th>
                                                        <th className="col-md-1">
                                                            <h4 className="mt-2">Precio promedio</h4>
                                                            <hr />
                                                        </th>
                                                        <th className="col-md-1">
                                                            <h4 className="mt-2">Cotizar Precio total</h4>
                                                            <hr />
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><p class="fs-16">Diésel</p></td>
                                                        <td><p class="fs-16">$22.0</p></td>
                                                        <td><a href="/cotizador" type="button" class="me-2 mb-2 mb-xl-0 btn btn-soft-primary">Ver precios</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td><p class="fs-16">Gasolina Magna</p></td>
                                                        <td><p class="fs-16">$?</p></td>
                                                        <td><a href="/cotizador" type="button" class="me-2 mb-2 mb-xl-0 btn btn-soft-primary">Ver precios</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td><p class="fs-16">Gasolina Premium</p></td>
                                                        <td><p class="fs-16">$?</p></td>
                                                        <td><a href="/cotizador" type="button" class="me-2 mb-2 mb-xl-0 btn btn-soft-primary">Ver precios</a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <h3 className="mb-1 mt-0">Precios en bomba</h3>
                                            </div>
                                        </div>
                                        <h1>Proximamente...</h1>
                                        <p className="text-muted">Precios en estaciones de servicio en México</p>
                                        <hr className="mb-1" />
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="d-flex align-items-center mt-2">
                                                    <div className="me-3 flex-shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trending-up text-success">
                                                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                                            <polyline points="17 6 23 6 23 12"></polyline>
                                                        </svg>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h5 className="mt-0 mb-0">0%</h5>                                                            <p className="text-muted mb-0 fs-13">Var. día ant. (Ps/Lt)</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center mt-2">
                                                    <div className="me-3 flex-shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trending-down text-danger">
                                                            <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
                                                            <polyline points="17 18 23 18 23 12"></polyline>
                                                        </svg>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h5 className="mt-0 mb-0">0%</h5>
                                                        <p className="text-muted mb-0 fs-13">Var. día ant. (%)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  

                        <div className="row">
                            <div className="col-12">
                                <div className="card" id="color-palette">
                                    <div className="card-body">
                                        <h3 className="my-0">Historial de precio Cassiopeia - Diésel</h3>
                                        <div dir="ltr">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div></>
    );
};

export default Dashboard;
