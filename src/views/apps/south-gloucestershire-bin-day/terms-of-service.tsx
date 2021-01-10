import * as React from 'react';
import { Footer } from '../../../components/footer';
import { SEO } from '../../../components/seo';
import { IMetadata } from '../../types';

import '../index.scss';

export interface IProps {
	metadata: IMetadata;
}

export const TermsOfService = (props: IProps) => {
  return <div>
		<SEO title="Terms Of Service | South Gloucestershire Bin Day"
				 description="The terms of service for South Gloucestershire Bin Day Alexa skill."
		     url={props.metadata.siteUrl} />
    <div className="wrapper">
			<div className="header">
				<div className="header-content">
					<img src="/icons/south-gloucestershire-bin-day.png" />
					<h1>Terms Of Service | South Gloucestershire Bin Day</h1>
				</div>
			</div>
			<div className="body">
				<p>This terms of service's aim is to be as transparent as possible about what you are agreeing to by using this Alexa Skill. This can change at any point, so it is your responsibility to review it regularly.</p>
				<p className="effective-date">Effective as of 29th March 2018</p>
				<h2>Goal</h2>
				<p>This skill's aim is to provide information on your next bin collection by the South Gloucestershire County Council. You use this skill at your own risk, and information accuracy or availability is not guarenteed. The developer or any third parties cannot be held responsible for any situations that occur from this information, including but not limited to missing a bin collection.</p>
				<h2>api.postcodes.io</h2>
				<p>This skill uses api.postcodes.io in order to determine the council of the users postcode to ensure they are within the South Gloucestershire county council district. By using this skill, you agree to the <a href="https://ideal-postcodes.co.uk/termsandconditions" title="Terms of service">terms of service</a> as outlined by api.postcodes.io.</p>
			</div>
		</div>
		<Footer />
  </div>
}