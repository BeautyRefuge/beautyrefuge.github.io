import React from 'react';
import Helmet from 'react-helmet';

export default () => (
  <div style={{ maxWidth: '800px' }}>
    <Helmet
      title="Services - Beauty Refuge Salon - Downers Grove, IL"
      meta={[
        {
          name: 'description',
          content:
            'Custom color, up-do styles, hair smoothing services, and more. Treat yourself ' +
            'to an amazing experience at the Beauty Refuge salon in Downers Grove, IL.',
        },
      ]}
    />

    <h1>Services Menu</h1>
    <p>
      Beauty Refuge specializes in many different hair services including
      balayage, custom color, ombré, highlighting, lowlighting, haircuts,
      extensions, keratin treatments and Brazilian Blowouts. Each service
      includes a relaxing scalp massage at the shampoo bowl along with
      complimentary beverages of coffee, tea and water.
    </p>
    <h2>Design</h2>
    <table className="table" style={{ maxWidth: '375px' }}>
      <tbody>
        <tr>
          <td>Women's Haircut and Blow-dry</td>
          <td>$45</td>
        </tr>
        <tr>
          <td>Women's Haircut</td>
          <td>$35</td>
        </tr>
        <tr>
          <td>Men's Haircut</td>
          <td>$30</td>
        </tr>
        <tr>
          <td>Children's Haircut</td>
          <td>$20</td>
        </tr>
        <tr>
          <td>Bang Trim</td>
          <td>$10</td>
        </tr>
        <tr>
          <td>Brazilian Blowout</td>
          <td>$250</td>
        </tr>
        <tr>
          <td>Split-end Repair Treatment</td>
          <td>$40</td>
        </tr>
        <tr>
          <td>Conditioning Treatment</td>
          <td>$25</td>
        </tr>
      </tbody>
    </table>

    <h2>Color</h2>
    <table className="table" style={{ maxWidth: '375px' }}>
      <tbody>
        <tr>
          <td>Color Retouch</td>
          <td>$42</td>
        </tr>
        <tr>
          <td>Color</td>
          <td>$60+</td>
        </tr>
        <tr>
          <td>Additional Color</td>
          <td>$25</td>
        </tr>
        <tr>
          <td>Full Foil</td>
          <td>$110+</td>
        </tr>
        <tr>
          <td>Partial Foil</td>
          <td>$65</td>
        </tr>
        <tr>
          <td>Balayage</td>
          <td>$145+</td>
        </tr>
        <tr>
          <td>Multi-Dimensional Color</td>
          <td>$175+</td>
        </tr>
        <tr>
          <td>Toning</td>
          <td>$30</td>
        </tr>
        <tr>
          <td>Shine Lock</td>
          <td>$40</td>
        </tr>
        <tr>
          <td>Color Correction/upon consultation</td>
          <td>$225+</td>
        </tr>
      </tbody>
    </table>
    <h2>Styling</h2>
    <table className="table" style={{ maxWidth: '420px' }}>
      <tbody>
        <tr>
          <td colSpan="2" style={{ borderBottom: '1px solid #dee2e6' }}>
            Complimentary blow-dry when spending $150 or more
          </td>
        </tr>
        <tr>
          <td>Blow-dry</td>
          <td>$30</td>
        </tr>
        <tr>
          <td>Up-do</td>
          <td>$80+</td>
        </tr>
        <tr>
          <td>Flat Iron/Curling Iron</td>
          <td>$40</td>
        </tr>
        <tr>
          <td>Extension Install</td>
          <td>$100</td>
        </tr>
        <tr>
          <td>Extension Re-adjustment</td>
          <td>$185</td>
        </tr>
        <tr>
          <td>Extension Removal</td>
          <td>$50</td>
        </tr>
      </tbody>
    </table>
  </div>
);
