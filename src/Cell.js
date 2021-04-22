import React, { Component } from 'react';

class Cell extends Component {

    state = {
        color: this.props.value
    }

    clickE = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {

        return (
            <div className='cell' style={{backgroundColor: this.state.color}} onClick={this.clickE}>
            </div>
        )
    }
}

export default Cell

