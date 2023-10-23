import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';

const Header = () => {
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
        <div className="header-7">
            <header>
                <nav className="navbar navbar-expand-lg topnav-menu navbar-light zindex-10">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src="src/assets/images/logo.png" height="60" className="d-inline-block align-top" alt="" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content3"
                            aria-controls="topnav-menu-content3" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="topnav-menu-content3">

                            <ul class="navbar-nav align-items-lg-center mx-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="/">Inicio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="servicios">Servicios</a>
                                </li>
                               <li class="nav-item">
                                    <a class="nav-link" href="nosotros">Nosotros</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/#contactanos">Contactanos</a>
                                </li>
                            </ul>
                            {userInfo ? (
                                <>
                                    <NavDropdown title={userInfo.name} id='username'>
                                        <a to='/profile'>
                                            <NavDropdown.Item><a className="" href="#"><Link className="btn " to='/profile' >Perfil</Link></a></NavDropdown.Item>
                                        </a>
                                        <NavDropdown.Item onClick={logoutHandler}>
                                            Salir
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </>

                            ) : (
                                    <>
                                        <ul className="navbar-nav">
                                            <li className="nav-item log_in">
                                                <a className="" href="#"><Link className="btn btn-secondary btn-sm" to='/login' >Iniciar sesión</Link></a>
                                            </li>
                                        </ul>
                                 </>                                    
                                    )}

                            
                        </div>
                    </div>
                </nav>
                <div id="loginModal" className="modal">
                    <div className="modal-content">
                        <span className="close-icon">&times;</span>
                        <img src="src/assets/images/logo.png" alt="Centered Image" />
                        <form id="loginForm" noValidate method="POST">
                            <label htmlFor="email">Correo electrónico:</label>
                            <input type="email" id="email" name="email" /><br />

                            <label htmlFor="password">Contraseña:</label>
                            <input type="password" id="password" name="password" required />
                            <span id="showPassword" className="eye-icon">👁️</span><br />

                            <button type="submit" className="btn btn-primary"><a id="dashboardLink" href="dashboard.html" style={{ display: 'none' }}></a></button>

                            <div id="errorLabel" className="errorLabel"></div>
                        </form>

                        <form id="registerForm" style={{ display: 'none' }}>
                            <div id="registerSteps">
                                <div className="step" id="step1">
                                    <h2>Paso 1: Información personal</h2>
                                    <form id="step1Form">
                                        <label htmlFor="firstName">First Name:</label>
                                        <input type="text" id="firstName" required /><br />
                                        <label htmlFor="lastName">Last Name:</label>
                                        <input type="text" id="lastName" required /><br />
                                        <button type="button" className="btn btn-secondary" id="step1Continuar">Continuar</button>
                                    </form>
                                </div>
                                <div className="step" id="step2">
                                    <h2>Paso 2: Subir Credenciales</h2>
                                    <form id="step2Form">
                                        <p>Subir credenciales relevantes para verificación:</p>
                                        <input type="file" id="credentials" accept=".pdf, .docx" required /><br />
                                        <button type="button" className="btn btn-secondary" id="step2Continuar">Continuar</button>
                                    </form>
                                </div>
                                <div className="step" id="step3">
                                    <h2>Paso 3: Subir Certificados</h2>
                                    <form id="step3Form">
                                        <p>Subir certificados para verificación:</p>
                                        <input type="file" id="certificates" accept=".pdf, .docx" required /><br />
                                        <button type="button" className="btn btn-secondary" id="step3Continuar">Continuar</button>
                                    </form>
                                </div>
                                <div className="step" id="step4">
                                    <h2>Paso 4: Escribir detalles</h2>
                                    <form id="step4Form">
                                        <p>Observaciones y comentarios:</p>
                                        <textarea id="question" required></textarea><br />
                                        <button type="button" className="btn btn-secondary" id="step4Continuar">Continuar</button>
                                    </form>
                                </div>
                                <div className="step" id="step5">
                                    <h2>Paso 5: Revisión final</h2>
                                    <form id="step5Form">
                                        <p>Por favor verifique su información antes de enviar:</p>
                                        <button type="submit" className="btn btn-secondary">Enviar</button>
                                    </form>
                                </div>
                            </div>
                        </form>

                        <form id="resetPasswordForm" style={{ display: 'none' }}>
                            <label htmlFor="resetEmail">Correo electrónico:</label>
                            <input type="email" id="resetEmail" name="resetEmail" required /><br />

                            <button type="submit" className="btn btn-secondary">Enviar verificación</button>
                        </form>
                        <a href="#" id="forgotPassword">¿Olvidaste tu contraseña?</a>
                        <p id="toggleForms">¿Aún no eres miembro? <a href="#">Regístrate</a></p>
                        <span className="back-icon">&larr;</span>
                    </div>
                </div>
            </header>
        </div>
    );
};
export default Header;
