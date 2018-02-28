import React, { Component } from 'react';

import Gallery from '../Gallery';
import './index.css';

const address = (
  <div>
    <h2>Address</h2>
    <div style={{ marginBottom: '20px' }}>
      Beauty Refuge Salon<br />
      1909 Meyers Rd, Suite 112<br />
      Oakbrook Terrace, IL 60181<br />
      (630) 600-8482 - texting preferred
    </div>
    <p>
      <a target="_blank" rel="noopener" href="https://goo.gl/maps/GiwWPgfJjNP2">
        Click here for Directions
      </a>
    </p>
  </div>
);

const hours = (
  <div>
    <h2>Hours</h2>
    <table className="table table-sm" style={{ maxWidth: '350px' }}>
      <tbody>
        <tr>
          <td>Sun</td>
          <td>Closed</td>
        </tr>
        <tr>
          <td>Mon</td>
          <td>Closed</td>
        </tr>
        <tr>
          <td>Tue</td>
          <td>10:00 am - 9:00 pm</td>
        </tr>
        <tr>
          <td>Wed</td>
          <td>10:00 am - 9:00 pm</td>
        </tr>
        <tr>
          <td>Thu</td>
          <td>Closed</td>
        </tr>
        <tr>
          <td>Fri</td>
          <td>10:00 am - 7:00 pm</td>
        </tr>
        <tr>
          <td>Sat</td>
          <td>10:00 am - 5:00 pm</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const socialLinks = (
  <div className="social-media">
    <a
      className="facebook"
      target="_blank"
      rel="noopener"
      href="https://www.facebook.com/beautyrefugesalon"
    />
    <a
      className="yelp"
      target="_blank"
      rel="noopener"
      href="https://www.yelp.com/biz/beauty-refuge-oakbrook-terrace"
    />
    <a
      className="instagram"
      target="_blank"
      rel="noopener"
      href="https://www.instagram.com/beauty.refuge/"
    />
  </div>
);

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row" style={{ marginTop: '40px' }}>
            <div className="col-md-4">{address}</div>

            <div className="col-lg-4">{hours}</div>

            <div className="col-lg-4">
              <h2>Instagram Feed</h2>
              <Gallery count="9" />
            </div>
          </div>
        </div>
        {socialLinks}
      </footer>
    );
  }
}
