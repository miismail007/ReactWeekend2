import React, { Component } from 'react';

class ClassComponent extends Component {

    state = {
        text: "hello world",
        counter: 0
    }
    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
                <h1>{this.state.counter}</h1>
                <button onClick={() => {
                    this.setState({ counter: this.state.counter + 1 })
                }}>increment</button>
                <button onClick={() => {
                    this.setState({ counter: this.state.counter - 1 })
                }}>decrement</button>
                <input onChange={(text) => {
                    this.setState({ text: text.target.value })
                }} />
            </div>);
    }
}

export default ClassComponent;
