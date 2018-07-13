import React, { Component } from 'react';

import heroPic from './salon-sofia.jpg';

export default class Hero extends Component {
  render() {
    return (
      <img src={heroPic} className="img-fluid" />
    );
  }
}
