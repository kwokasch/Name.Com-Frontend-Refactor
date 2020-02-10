import React, { Component } from 'react';
import Form from './components/Form';
import Result from './components/Result';
import './App.css';
require('dotenv').config()

const API_KEY = process.env.REACT_APP_NAMEDOTCOM_KEY

export default class App extends Component {
  state = {
    domainNames: [],
    currentDomainNames: '',
    results: [
      {
        domainName: "example.org",
        sld: "example",
        tld: "org"
      },
      {
          domainName: "google.com",
          sld: "google",
          tld: "com"
      },
      {
        domainName: "timounkontan.org",
        sld: "timounkontan",
        tld: "org",
        purchasable: true,
        purchasePrice: 12.99,
        purchaseType: "registration",
        renewalPrice: 12.99
      }
    ]
  }

  handleSubmit = event => {
    event.preventDefault()

    const domainNames = this.state.currentDomainNames.split(', ')
    
    this.setState({ domainNames })
    this.postNames({ domainNames })
  }

  handleChange = event => {
    let currentDomainNames = this.state.currentDomainNames
    currentDomainNames = event.target.value
    this.setState({ currentDomainNames })
  }

  postNames = domainNames => {
    fetch('http://api.dev.name.com/v4/domains:checkAvailability', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${API_KEY}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(domainNames)
    }).then(response => response.json())
    .then(results => {
      this.setState({ results })
    })
  }

  render(){
    return (
      <div className="App">
        <Form id="form" handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <h2>Search Results:</h2>
        {this.state.results.map(result => {
            return <Result id="result" result={result} key={result.id}/>
          })
        }
      </div>
    );
  }
}