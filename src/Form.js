import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: 0
        }
    }
    render() {
        return (
            <div>
                <input onKeyUp={this.onKeyUp} ref="inputNumber" type="number" onChange={this.inputChanged} />
                <button value="hello" onClick={this.saveNumber}>Save</button>
            </div>
        )
    }
    

    inputChanged = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    saveNumber = (event) => {
        this.props.onSubmit(this.state.value)
    }

    
    onKeyUp = (event) => {
        if(event.key === 'Enter')
            this.saveNumber()
    }
}