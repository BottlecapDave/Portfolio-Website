import * as React from 'react';
import { Icon, Icons } from "@rocketmakers/armstrong"

import './contactWrapper.scss';

export const ContactWrapper = (props) => {
  return <div className="contact-container">
    <div className="contact-wrapper">
      <a href="" title="Find me on twitter" target="_blank" rel="noopener noreferre"><Icon icon={Icons.Icomoon.twitter} /></a>
      <a href="" title="Find me on Github" target="_blank" rel="noopener noreferre"><Icon icon={Icons.Icomoon.github} /></a>
      <a href="" title="Find me on LinkedIn" target="_blank" rel="noopener noreferre"><Icon icon={Icons.Icomoon.linkedin} /></a>
      <a href="" title="Send me an email" target="_blank" rel="noopener noreferre"><Icon icon={Icons.Icomoon.mail} /></a>
    </div>
    <div className="contact-content">
      {props.children}
    </div>
  </div>
}