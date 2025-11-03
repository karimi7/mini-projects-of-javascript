import React, { useState } from 'react';
import './Ticket.css';

export default function Ticket() {
    const countriesData = {
        Iran: ['Tabriz', 'Tehran', 'Shiraz', 'Esfahan', 'Mashhad'],
        Turkey: ['Istanbul', 'Ezmir', 'Ankara', 'Antaliya'],
        US: ['Los Angles', 'San Diego', 'Chicago'],
    };
    const [mainCountryCities, setMainCountryCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');

    const selectHandler = (event) => {
        let mainCountry = event.target.value;

        console.log(countriesData[mainCountry]);
        setSelectedCountry(mainCountry);

        if (mainCountry && mainCountry !== '-1' && countriesData[mainCountry]) {
            setMainCountryCities(countriesData[mainCountry]);
        } else {
            setMainCountryCities([]);
        }
    };

    return (
        <div className="container">
            <div className="col-md-6 box">
                <input className="fnameInput" placeholder="First Name" />
            </div>

            <div className="col-md-6 box">
                <input className="lnameInput" placeholder="Last Name" />
            </div>
            <div className="col-md-6 box">
                <input className="phoneInput" placeholder="Phone Number" />
            </div>
            <div className="col-md-6 box">
                <input className="emailInput" placeholder="Email" />
            </div>
            <div className="col-md-6 box">
                <select
                    value={selectedCountry}
                    onChange={selectHandler}
                    className="countrySelect"
                >
                    <option value="-1">Please Select ...</option>
                    {Object.keys(countriesData).map((countryKey) => (
                        <option
                            key={countryKey}
                            value={countryKey}
                            className="option"
                        >
                            {/* میشه نام نمایشی کامل‌تری اینجا گذاشت */}
                            {countryKey === 'Iran' && 'Iran'}
                            {countryKey === 'Turkey' && 'Turkey'}
                            {countryKey === 'US' && 'United State'}
                        </option>
                    ))}
                </select>
            </div>
            <div className="col-md-6 box">
                <select className="citySelect">
                    <option value="-1">Please Select City</option>
                    {mainCountryCities.map((city) => (
                        <option key={city} value={city} className="option">
                            {city}
                        </option>
                    ))}
                </select>
            </div>
            <div className="col-md-12 box">
                <button className="btn">Book a ticket</button>
            </div>
        </div>
    );
}
