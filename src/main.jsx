import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import './index.css';
import HomeScreen from './screens/HomeScreen';
import ServiceScreen from './screens/ServiceScreen.jsx';
import AboutusScreen from './screens/AboutusScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';
import DashboardScreen from './screens/Dashboard.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import CotizadorScreen from './screens/Cotizador';
import PrivateRoute from './components/PrivateRoute.jsx';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route index={true} path='/' element={<HomeScreen />} />
            <Route path='/servicios' element={<ServiceScreen/>} />
            <Route path='/nosotros' element={<AboutusScreen/>} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/dashboard' element={<DashboardScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/cotizador' element={<CotizadorScreen />} />
            <Route path='' element={<PrivateRoute />}>
                <Route path='/profile' element={<ProfileScreen />} />
            </Route>
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </Provider>
);
