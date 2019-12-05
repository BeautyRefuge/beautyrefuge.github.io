import React from 'react';

import './index.css';
import Instagram from './instagram';

const InstagramButton = () => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-primary btn-instagram"
    href="https://www.instagram.com/beauty.refuge/"
  >
    <Instagram />
    <span>Follow on Instagram</span>
  </a>
)

export default InstagramButton
