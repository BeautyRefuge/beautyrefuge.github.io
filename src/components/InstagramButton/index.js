import React from 'react';

import InstagramIcon from './instagramIcon';

const InstagramButton = (props) => (
  <a
    href="https://www.instagram.com/beauty.refuge/"
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center bg-pink-dark rounded
      text-white p-3 hover:bg-pink hover:text-coolgray ${props.className}`}
  >
    <InstagramIcon className="fill-current w-8 h-8 mr-1 -ml-1" />
    <span className="uppercase font-normal text-sm tracking-wider">Follow on Instagram</span>
  </a>
)

export default InstagramButton
