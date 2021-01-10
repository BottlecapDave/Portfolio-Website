import * as React from 'react';
import { Footer } from '../../../components/footer';

import '../index.scss';

export const PrivacyPolicy = () => {
  return <div>
    <div className="wrapper">
			<div className="header">
				<div className="header-content">
					<img src="/icons/south-gloucestershire-bin-day.png" />
					<h1>Privacy Policy | South Gloucestershire Bin Day</h1>
				</div>
			</div>
			<div className="body">
			<p>This privacy policy's aim is to be as transparent as possible about what this Alexa Skill will do with the information provided to it. This privacy policy can change at any point, so it is your responsibility to review it regularly.</p>
				<p className="effective-date">Effective as of 29th March 2018</p>
				<h2>Personal Data On Your Device</h2>
				<p>This skill will only use the address associated with the device that you use the skill on to determine the bin collection dates. It will not use this information for any other purpose.</p>
				<h2>api.postcodes.io</h2>
				<p>This skill will pass the device's postcode to api.postcodes.io to determine if it is served by the South Gloucestershire county countil. By using this skill, you agree to the <a href="https://ideal-postcodes.co.uk/privacy_policy" title="Privacy Policy">privacy policy</a> as outlined by api.postcodes.io.</p>
				<h2>South Gloucestershire County Council</h2>
				<p>This skill will pass the device's full address to the South Gloucestershire county council website. This is to retrieve the bin collection information for your device's location. By using this skill, you agree to the <a href="http://www.southglos.gov.uk/council-and-democracy/data-protection-and-freedom-of-information/privacy-statement/" title="Privacy Policy">privacy policy</a> as outlined by South Gloucestershire County Council.</p>
			</div>
		</div>
		<Footer />
  </div>
}