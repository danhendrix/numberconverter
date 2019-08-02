import React, { Component } from 'react';
import Axios from 'axios';
import Converter from '../util/converter';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.numberChanged = this.numberChanged.bind(this);
        this.state = {
            numberInput: '',
            numberConverted: '',
        };
    }

    numberChanged(event,t) {
        this.setState({
            numberInput: event.target.value,
            numberConverted: Converter.convertNumber(event.target.value)
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h3>Convert a number - </h3>
                    <label>Input - </label><input type="text" onChange={this.numberChanged} />
                </div>
                <div>
                    <label>Converted - </label>
                    {
                        this.state.numberConverted && this.state.numberConverted.length &&
                        <span>{this.state.numberConverted}</span>
                    }
                </div>
            </div>
        )
    }
}