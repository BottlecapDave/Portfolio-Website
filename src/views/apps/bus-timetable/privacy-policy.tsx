import * as React from 'react';
import { Footer } from '../../../components/footer';
import { SEO } from '../../../components/seo';
import { IMetadata } from '../../types';

import '../index.scss';

export interface IProps {
	metadata: IMetadata;
}

export const PrivacyPolicy = (props: IProps) => {
  return <div>
		<SEO title="Privacy Policy | Bus Timetable"
				description="The privacy policy for Bus Timetable Alexa skill."
		    url={props.metadata.siteUrl} />
    <div className="wrapper">
			<div className="header">
				<div className="header-content">
					<img src="/icons/bus-timetable.png" />
					<h1>Privacy Policy | Bus Timetable</h1>
				</div>
			</div>
			<div className="body">
				<p>This privacy policy's aim is to be as transparent as possible about what this Alexa Skill will do with the information provided to it. This privacy policy can change at any point, so it is your responsibility to review it regularly.</p>
				<p className="effective-date">Effective as of 21st December 2017</p>
				<h2>Personal Data On Your Device</h2>
				<p>This skill will only use the address associated with the device that you use the skill on to determine the origin or from location when requesting bus information to a specified destination. It will not use this information for any other purpose.</p>
				<h2>Google Maps Directions API</h2>
				<p>This skill will pass the specified origin and destination to Google to calculate the bus routes available between the two locations. It will then use they journeys to give the information you require. By using this skill, you agree to the <a href="https://www.google.com/policies/privacy" title="Google Privacy Policy">privacy policy</a> as outlined by Google.</p>
			</div>
		</div>
		<Footer />
  </div>
}