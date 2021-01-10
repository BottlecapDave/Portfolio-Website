import * as React from 'react';
import './footer.scss';

export const Footer = (props) => {
  return <div className="footer">
    <div className="footer-content">
      <p>&copy; <a href="http://www.davidskendall.co.uk" title="View main site">David Kendall</a> {new Date().getFullYear()}</p>
    </div>
  </div>
}