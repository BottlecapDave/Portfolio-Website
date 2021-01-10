import * as React from 'react';
import { Footer } from '../../../components/footer';

import '../index.scss';

export const TermsOfService = () => {
  return <div>
    <div className="wrapper">
			<div className="header">
				<div className="header-content">
					<img src="../../icons/bus-timetable.png" />
					<h1>Terms Of Service | Bus Timetable</h1>
				</div>
			</div>
			<div className="body">
      <p>This terms of service's aim is to be as transparent as possible about what you are agreeing to by using this Alexa Skill. This can change at any point, so it is your responsibility to review it regularly.</p>
				<p className="effective-date">Effective as of 21st December 2017</p>
				<h2>Goal</h2>
				<p>This skill's aim is to provide information on the next available bus between two locations. You use this skill at your own risk, and information accuracy or availability is not guarenteed. The developer or any third parties cannot be held responsible for any situations that occur from this information, including but not limited to missing key events.</p>
				<h2>Google Maps Directions API</h2>
				<p>This skill uses the Google Maps Directions API to determine the next bus to reach the specified destination. By using this skill, you agree to the <a href="https://www.google.com/intl/en/policies/terms" title="Terms of service">terms of service</a> as outlined by Google.</p>
      </div>
		</div>
		<Footer />
  </div>
}