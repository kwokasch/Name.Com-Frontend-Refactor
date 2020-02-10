import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <form className='form' onSubmit={this.props.handleSubmit}>
                <h2>Domain Search:</h2>
                <label>Domain Name/s:</label>
                <input type='text' name='domainName' placeholder='google.com, example.org, etc.' onChange={this.props.handleChange} />
                <input id='submit' type='submit' value='Submit' />
            </form>
        )
    }
}
