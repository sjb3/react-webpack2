'use strict';

import React, { Component } from 'react';
var Link = require('react-router-dom').Link;

export class Home extends Component {
  render() {
    return (
      <div className='home-container'>
      <h1>Github Battle Royale!</h1>
      <Link className='button' to='/battle'>Battle</Link>
      </div>
    )
  }
}