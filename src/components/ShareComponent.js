import React from 'react';
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	EmailShareButton,
} from 'react-share';
import {
	FacebookIcon,
	TwitterIcon,
	LinkedinIcon,
	EmailIcon,
} from 'react-share';
export default function ShareComponent() {
	return (
		<>
			<FacebookShareButton
				url={'https://above-the-clouds.vercel.app/'}
				style={{ margin: '4px' }}
				quote={
					'A travel log for Delta flight attendants. A summary of all your flying this year!'
				}
				hashtag={'#DeltaFlightAttendants'}
			>
				<FacebookIcon size={45} round={true}></FacebookIcon>
			</FacebookShareButton>
			<LinkedinShareButton
				url={'https://above-the-clouds.vercel.app/'}
				style={{ margin: '4px' }}
				title={'Above The Clouds'}
				summary={
					'A fun, interactive travel log for Delta flight attendants. A summary of all your flying this year!'
				}
				// source={'My Travel Log'}
			>
				<LinkedinIcon size={45} round={true}></LinkedinIcon>
			</LinkedinShareButton>
			<TwitterShareButton
				url={'https://above-the-clouds.vercel.app/'}
				style={{ margin: '4px' }}
				title={'Above The Clouds'}
				hashtags={['#DeltaFlightAttendants', '#Travel', '#Airlines']}
			>
				<TwitterIcon size={45} round={true}></TwitterIcon>
			</TwitterShareButton>
			<EmailShareButton
				url={'https://above-the-clouds.vercel.app/'}
				style={{ margin: '4px' }}
				subject={'Above The Clouds'}
				body={
					'A fun, interactive travel log for Delta flight attendants. A summary of all your flying this year!'
				}
			>
				<EmailIcon size={45} round={true}></EmailIcon>
			</EmailShareButton>
		</>
	);
}
