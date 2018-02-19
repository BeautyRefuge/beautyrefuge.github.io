import React, { Component } from 'react';
import Link from 'gatsby-link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import './index.css';
import logoSmall from './beauty-refuge-logo-71w.png';
import logoLarge from './beauty-refuge-logo-142w.png';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  close() {
    this.setState({
      isOpen: false,
    });
  }
  render() {
    return (
      <Navbar light expand="md" className="fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand" onClick={this.close}>
            <img
              width="71"
              height="46"
              alt="Beauty Refuge Salon"
              srcSet={logoSmall + ', ' + logoLarge + ' 2x'}
              src={logoSmall}
            />
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/" className="nav-link" onClick={this.close}>
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/services" className="nav-link" onClick={this.close}>
                  Services
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/gallery" className="nav-link" onClick={this.close}>
                  Gallery
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contact" className="nav-link" onClick={this.close}>
                  Contact
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/book-appointment"
                  className="nav-link btn btn-primary"
                  onClick={this.close}
                >
                  Book Appointment
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}
