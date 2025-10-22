import './Counter.css';
import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        };

        this.addToCounter = this.addToCounter.bind(this);
        this.minusToCounter = this.minusToCounter.bind(this);
    }

    addToCounter() {
        console.log('add');
        this.setState((prevState) => {
            return { counter: prevState.counter + 1 };
        });
    }

    minusToCounter() {
        console.log('minus');
        this.setState((presState) => {
            return { counter: presState.counter - 1 };
        });
    }

    render() {
        return (
            <section id="main">
                <div className="container">
                    <h2 id="title">Counter</h2>
                    <h3 id="counter">{this.state.counter}</h3>
                    <div className="btn-container">
                        <button id="add" onClick={this.addToCounter}>Add Count</button>
                        <button id="lower" onClick={this.minusToCounter}>Lower Count</button>
                    </div>
                </div>
            </section>
        );
    }
}
