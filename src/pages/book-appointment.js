import React from 'react';
import Helmet from 'react-helmet';
import Iframe from '../components/Iframe';

const url =
  'https://www.vagaro.com/Users/BusinessWidget.aspx?' +
  'enc=MMLjhIwJMcwFQhXLL7ifVFe2WD4QgtXLj5n/xLaCmsKxBWWioXABxhc5C5oT/RU1KJfXeDHpMc0fJ+Qas1NOhIkWb1tBFTASY5r/0+axnVkRmW1YUSgt27P/cEwpJVjg';

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
    <p>
      Book your appointment online now! Use this Vagaro booking widget to find
      an appointment that works for you.
    </p>
    <Iframe src={url} width="100%" height="650px" />
  </div>
);
