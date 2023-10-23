import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const mapContainerStyle = {
    height: "520px",
};

const formContainerStyle = {
    width: '100%',
    padding: '16px',
    boxSizing: 'border-box',
    maxWidth: '400px',
};

const center = {
    lat: 23.6345,
    lng: -102.5528,
};

const options = [
    {
        label: 'AEMSA', lat: 23.6345, lng: -102.5528, products: [
            { name: 'Product A', price: 10 },
            { name: 'Product B', price: 15 },
        ]
    },
    {
        label: 'G500', lat: 10.6345, lng: -5.5528, products: [
            { name: 'Product X', price: 12 },
            { name: 'Product Y', price: 18 },
        ]

    },
    {
        label: 'SIMSA', lat: 20.6345, lng: -9.5528, products: [
            { name: 'Product Z', price: 10 },
            { name: 'Product T', price: 15 },
        ]
    },
];

function Cotizador() {
    const [address, setAddress] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [city, setCity] = useState('');
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [selectedProduct, setSelectedProduct] = useState(options[0].products[0]);
    const [quantity, setQuantity] = useState(1);
    const [totalCost, setTotalCost] = useState(selectedProduct.price);
    const [distance, setDistance] = useState(null);
    const [quote, setQuote] = useState(null);

    const autoCompleteRef = useRef(null);

    useEffect(() => {
        const autoComplete = new window.google.maps.places.Autocomplete(autoCompleteRef.current);

        autoComplete.addListener('place_changed', () => {
            const place = autoComplete.getPlace();

            setAddress(place.formatted_address);

            place.address_components.forEach((component) => {
                if (component.types.includes('postal_code')) {
                    setPostalCode(component.long_name);
                } else if (component.types.includes('locality')) {
                    setCity(component.long_name);
                }
            });
        });
    }, []);

    const calculateTotalCost = () => {
        const cost = selectedProduct.price * quantity;
        setTotalCost(cost);
    };

    const calculateDistance = () => {
        const userLocation = new window.google.maps.LatLng(center.lat, center.lng);
        const destinationLocation = new window.google.maps.LatLng(selectedOption.lat, selectedOption.lng);
        const distance = window.google.maps.geometry.spherical.computeDistanceBetween(
            userLocation,
            destinationLocation
        );

        setDistance((distance / 1000).toFixed(2));
    };

    const calculateQuote = () => {
        calculateDistance();
        if (distance !== null && totalCost !== null) {
            const quoteValue = (distance * 3.4) + totalCost;
            setQuote(quoteValue.toFixed(2));
        }
    };

    return (
        <>
        <div style={containerStyle}>
            <h1>Cotizador</h1>
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="card shadow">
                        <div className="card-body p-0">
                            <div className="row align-items-center g-0">
                                <div className="offset-lg-1 col-md-5 p-3">
                                    <div className="mx-auto mb-5">
                                        <h3>Cotiza rápido</h3>
                                        <div style={formContainerStyle}>
                                            <form>
                                                <div>
                                                    <label htmlFor="address">Dirección:</label>
                                                    <input
                                                        type="text"
                                                        id="address"
                                                        name="address"
                                                        value={address}
                                                        onChange={(e) => setAddress(e.target.value)}
                                                        ref={autoCompleteRef}
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="postalCode">Código Postal:</label>
                                                    <input
                                                        type="text"
                                                        id="postalCode"
                                                        name="postalCode"
                                                        value={postalCode}
                                                        readOnly
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="city">Ciudad:</label>
                                                    <input
                                                        type="text"
                                                        id="city"
                                                        name="city"
                                                        value={city}
                                                        readOnly
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="selectOption">Seleccione un Proveedor:</label>
                                                    <select
                                                        id="selectOption"
                                                        name="selectOption"
                                                        value={selectedOption.label}
                                                        onChange={(e) => {
                                                        const selectedOptionLabel = e.target.value;
                                                            const selected = options.find((option) => option.label === selectedOptionLabel);
                                                            setSelectedOption(selected);
                                                            calculateTotalCost();
                                                            calculateDistance();
                                                        }}
                                                        >
                                                            {options.map((option) => (
                                                            <option key={option.label} value={option.label}>
                                                                {option.label}
                                                            </option>
                                                            ))}
                                                    </select>
                                                </div>
                                                <div>
                                                    <label htmlFor="selectProduct">Seleccione un Producto:</label>
                                                    <select
                                                        id="selectProduct"
                                                       name="selectProduct"
                                                       value={selectedProduct.name}
                                                       onChange={(e) => {
                                                        const selectedProductName = e.target.value;
                                                        const selected = selectedOption.products.find((product) => product.name === selectedProductName);
                                                        setSelectedProduct(selected);
                                                        calculateTotalCost();
                                                        }}
                                                    >
                                                        {selectedOption.products.map((product) => (
                                                        <option key={product.name} value={product.name}>
                                                            {product.name}
                                                        </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div>
                                                    <label htmlFor="quantity">Cantidad:</label>
                                                    <input
                                                        type="number"
                                                        id="quantity"
                                                        name="quantity"
                                                        value={quantity}
                                                        onChange={(e) => {
                                                            setQuantity(e.target.value);
                                                            calculateTotalCost();
                                                        }}
                                                        min="1"
                                                    />
                                                </div>
                                                <p>Total Cost: {totalCost}</p>
                                                <p>Distancia Calculada: {distance !== null ? `${distance} km` : 'N/A'}</p>
                                                <button type="button" onClick={calculateQuote}>Cotizar</button>
                                                <p>Quote: {quote !== null ? `${quote}` : 'N/A'}</p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div style={mapContainerStyle}>
                                        <LoadScript googleMapsApiKey="AIzaSyB3r7fmjkpKxk9iqkwE93IXsxcW9eGlCHU" libraries={["places", "geometry"]}>
                                        <GoogleMap
                                            mapContainerStyle={mapContainerStyle}
                                            center={center}
                                            zoom={6}
                                        >
                                        <StandaloneSearchBox
                                            onPlacesChanged={() => { }}
                                        >
                                        <input
                                            type="text"
                                            placeholder="Buscar dirección"
                                            style={{
                                                boxSizing: 'border-box',
                                                border: '1px solid transparent',
                                                width: '500px',
                                                height: '32px',
                                                padding: '0 12px',
                                                borderRadius: '3px',
                                                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
                                                fontSize: '14px',
                                                outline: 'none',
                                                textOverflow: 'ellipsis',
                                            }}
                                            ref={autoCompleteRef}
                                        />
                                        </StandaloneSearchBox>
                                        </GoogleMap>
                                        </LoadScript>
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
}

export default Cotizador;
