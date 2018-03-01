import React from 'react';
import Helmet from 'react-helmet';
import InstagramButton from '../components/InstagramButton';
import Iframe from '../components/Iframe';

export default () => (
  <div>
    <Helmet
      title="Contact - Beauty Refuge Salon - Oakbrook Terrace, IL"
      meta={[
        {
          name: 'description',
          content:
            'Get in touch with Beauty Refuge for an appointment. This salon is located in ' +
            'Oakbrook Terrace, IL and specializes in color, extensions, and styling.',
        },
      ]}
    />
    <h1>Contact Us</h1>
    <div className="row">
      <div className="col-md-4">
        <InstagramButton />
        <p>
          Thanks for your interest in Beauty Refuge. Please use this form to
          schedule an appointment, ask a question, or just say hi!
        </p>
      </div>
      <div className="col-md-8">
        <div className="alert alert-danger" role="alert">
          Beauty Refuge is not accepting any new clients at the moment.
        </div>
        <div style={{ minHeight: '400px', border: '1px solid #eee' }}>
          <Iframe
            src="https://gregjopa.wufoo.com/embed/rzw3z4t182ay77/def/&header=hide"
            width="100%"
            height="500px"
          />
        </div>
      </div>
    </div>
  </div>
);
