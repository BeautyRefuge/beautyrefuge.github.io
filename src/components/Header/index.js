import React from 'react';
import Link from 'gatsby-link';
import { Navbar } from 'reactstrap';

import './index.css';
import logoSmall from './beauty-refuge-logo-71w.png';
import logoLarge from './beauty-refuge-logo-142w.png';

const Header = () => (
  <Navbar light expand="md" className="fixed-top">
    <div className="container">
      <Link to="/" className="navbar-brand">
        <img
          width="71"
          height="46"
          alt="Beauty Refuge Salon"
          srcSet={`${logoSmall}, ${logoLarge} 2x`}
          src={logoSmall}
        />
      </Link>
    </div>
  </Navbar>
)

export default Header;
