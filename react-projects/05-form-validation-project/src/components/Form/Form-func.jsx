import './Form.css'

//  WITH FUNCTION :

import React, { useState, useCallback } from 'react';

export default function FormFunc() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        submission: false,
        success: false,
        hasError: false,
    });

    const changeHandler = useCallback((event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }, []);

    const submitHandler = useCallback(
        (event) => {
            event.preventDefault();

            if (
                formData.firstName.length >= 3 &&
                formData.lastName.length >= 3 &&
                formData.email.length >= 3
            ) {
                setFormData((prevData) => ({ ...prevData, submission: true }));

                setTimeout(() => {
                    setFormData((prevData) => ({ ...prevData, success: true }));
                }, 2000);
            } else {
                setFormData((prevData) => ({
                    ...prevData,
                    success: false,
                    submission: false,
                    hasError: true,
                }));
            }
        },
        //  برای درسترسی به آخرین مقادیر
        [formData]
    );

    return (
        <div className="form-container">
            <form className="register-form" onSubmit={submitHandler}>
                {formData.submission ? (
                    <div
                        className={`success-message ${
                            formData.success ? 'hide' : ''
                        }`}
                    >
                        Success! Thank you for registering
                    </div>
                ) : null}

                <input
                    id="firstName"
                    className="form-field"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={changeHandler}
                />
                {/* error message */}
                {(formData.submission && formData.firstName.length < 3) ||
                (formData.hasError && formData.firstName.length < 3) ? (
                    <span className="error-message">
                        Please enter your firstname
                    </span>
                ) : null}

                <input
                    id="lastName"
                    className="form-field"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={changeHandler}
                />
                {/* error message */}
                {(formData.submission && formData.lastName.length < 3) ||
                (formData.hasError && formData.lastName.length < 3) ? (
                    <span className="error-message">
                        Please enter your lastname
                    </span>
                ) : null}

                <input
                    id="email"
                    className="form-field"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                />
                {/* error message */}
                {(formData.submission && formData.email.length < 3) ||
                (formData.hasError && formData.email.length < 3) ? (
                    <span className="error-message">
                        Please enter your email
                    </span>
                ) : null}

                <button className="form-field" type="submit">
                    Register
                </button>
            </form>
        </div>
    );
}
