import React, { Component } from 'react';
import Link from 'gatsby-link';

import './index.css';
import Bottles from './bottles';
import Hairdryer from './hairdryer';
import Scissors from './scissors';

export default class Expertise extends Component {
  render() {
    return (
      <div className="row" style={{ margin: '40px 0' }}>
        <div className="col-lg-3">
          <h2>Expertise</h2>
          <p>
            Beauty Refuge specializes in color, extensions, and styling. Our
            services include balayage, foil highlighting, color correction and
            more.
          </p>
          <Link to="/services">Learn More</Link>
        </div>

        <div className="col-lg-3">
          <div className="icon">
            <Scissors />
          </div>

          <div className="icon-text">
            <h3>Design</h3>
            <p>Haircut, Split-end Repair Treatment, Conditioning Treatment</p>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="icon">
            <Bottles />
          </div>

          <div className="icon-text">
            <h3>Color</h3>
            <p>
              Multi-Dimensional Color, Full Foil, Balayage, Color Correction
            </p>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="icon">
            <Hairdryer />
          </div>

          <div className="icon-text">
            <h3>Styling</h3>
            <p>Blow-dry, Up-do, Flat Iron/Curling Iron, Extension Install</p>
          </div>
        </div>
      </div>
    );
  }
}
