import React from 'react';
import Link from 'gatsby-link';

import logoSmall from './beauty-refuge-logo-71w.png';
import logoLarge from './beauty-refuge-logo-142w.png';

const Header = () => (
  <header className="w-full bg-pink">
    <div className="w-full container py-2">
      <Link to="/">
        <img
          width="71"
          height="46"
          alt="Beauty Refuge Salon"
          srcSet={`${logoSmall}, ${logoLarge} 2x`}
          src={logoSmall}
        />
      </Link>
    </div>
  </header>
)

export default Header;
