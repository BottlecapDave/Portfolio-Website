import * as React from 'react';
import { Icon, Icons } from "@rocketmakers/armstrong";
import * as AOS from 'aos';

import 'aos/dist/aos.css';
import './contactWrapper.scss';

export const ContactWrapper = (props) => {
  React.useEffect(() => {
    AOS.init({
      duration: 800
    });
  })

  return <div className="contact-container">
    <div className="contact-wrapper" 
         data-aos="fade-right" 
         data-aos-anchor=".contact-container">
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