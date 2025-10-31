import React from 'react';
import './Form.css';

//  WITH CLASS :
export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstNameData: '',
            lastNameData: '',
            emailData: '',

            submitted: false,
            allValid: false,
            hideSuccess: false,
        };
        this.submitHandler = this.submitHandler.bind(this);
    }

    firstNameHandler(event) {
        this.setState({
            firstNameData: event.target.value,
        });
    }

    lastNameHandler(event) {
        this.setState({
            lastNameData: event.target.value,
        });
    }

    emailHandler(event) {
        this.setState({
            emailData: event.target.value,
        });
    }

    submitHandler(event) {
        event.preventDefault();

        if (
            this.state.firstNameData.length >= 3 &&
            this.state.lastNameData.length >= 3 &&
            this.state.emailData.length >= 3
        ) {
            this.setState({
                submitted: true,
            });

            setTimeout(() => {
                this.setState({
                    hideSuccess: true,
                });
            }, 2000);
        } else {
            this.setState({
                allValid: true,
                hideSuccess: false,
                submitted: false,
            });
        }
    }

    render() {
        return (
            <div className="form-container">
                <form
                    onSubmit={this.submitHandler}
                    className="register-form"
                    autoComplete="off"
                >
                    {/* Uncomment the next line to show the success message */}
                    {this.state.submitted && (
                        <div
                            className={`success-message ${
                                this.state.hideSuccess ? 'hide' : ''
                            }`}
                        >
                            Success! Thank you for registering
                        </div>
                    )}
                    <input
                        onChange={(event) => this.firstNameHandler(event)}
                        value={this.state.firstNameData}
                        id="first-name"
                        className="form-field"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                    />
                    {/* Uncomment the next line to show the error message */}
                    {(this.state.submitted &&
                        this.state.firstNameData.length < 3) ||
                    (this.state.allValid &&
                        this.state.firstNameData.length < 3) ? (
                        <span id="first-name-error">
                            Please enter a first name
                        </span>
                    ) : null}
                    <input
                        onChange={(event) => this.lastNameHandler(event)}
                        value={this.state.lastNameData}
                        id="last-name"
                        className="form-field"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                    />
                    {/* Uncomment the next line to show the error message */}
                    {(this.state.submitted &&
                        this.state.lastNameData.length < 3) ||
                    (this.state.allValid &&
                        this.state.lastNameData.length < 3) ? (
                        <span id="first-name-error">
                            Please enter a first name
                        </span>
                    ) : null}
                    <input
                        onChange={(event) => this.emailHandler(event)}
                        value={this.state.emailData}
                        id="email"
                        className="form-field"
                        type="text"
                        placeholder="Email"
                        name="email"
                    />
                    {/* Uncomment the next line to show the error message */}
                    {(this.state.submitted &&
                        this.state.emailData.length < 3) ||
                    (this.state.allValid && this.state.emailData.length < 3) ? (
                        <span id="first-name-error">
                            Please enter a first name
                        </span>
                    ) : null}
                    <button className="form-field" type="submit">
                        Register
                    </button>
                </form>
            </div>
        );
    }
}
