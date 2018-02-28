import React from 'react';
import Helmet from 'react-helmet';
import Iframe from '../components/Iframe';

const url =
  'https://www.vagaro.com/Users/BusinessWidget.aspx?' +
  'enc=MMLjhIwJMcwFQhXLL7ifVFe2WD4QgtXLj5n/xLaCmsKxBWWioXABxhc5C5oT/RU1KJfXeDHpMc0fJ+Qas1NOhIkWb1tBFTASY5r/0+axnVkRmW1YUSgt27P/cEwpJVjg';

const isMobile =
  typeof window === 'object' &&
  /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

export default () => (
  <div style={{ minHeight: '400px' }}>
    <Helmet
      title="Book Appointment - Beauty Refuge Salon - Oakbrook Terrace, IL"
      meta={[
        {
          name: 'description',
          content:
            'Book an appointment at Beauty Refuge using the Vagaro Book 24/7 widget.',
        },
      ]}
    />
    <h1>Book Appointment</h1>

    {isMobile ? (
      <div>
        <p>Click the following button to book your appointment online using Vagaro:</p>
        <a
          href="https://www.vagaro.com/beautyrefuge/book-now"
          target="_blank"
          rel="noopener"
          className="btn btn-primary btn-lg"
        >
          Vagaro Beauty Refuge Website
        </a>
      </div>
    ) : (
      <div>
      <p>
        Book your appointment online now! Use this Vagaro booking widget to find
        an a ppointment that works for you.
      </p>
      <Iframe src={url} width="100%" height="1000px" />
      </div>
    )}
  </div>
);
