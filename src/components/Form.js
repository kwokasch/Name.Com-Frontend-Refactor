import React from 'react'

export default function Form (props) {
    return (
        <form className='form' onSubmit={props.handleSubmit}>
            <h2>Domain Search:</h2>
            <label>Domain Name/s:</label>
            <input type='text' name='domainName' placeholder='google.com, example.org, etc.' onChange={props.handleChange} />
            <input id='submit' type='submit' value='Submit' />
        </form>
    )
}