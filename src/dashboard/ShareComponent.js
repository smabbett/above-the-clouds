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
				url={'https://travel-log-pied.vercel.app/'}
				style={{ margin: '4px' }}
				quote={
					'A travel log for Delta flight attendants. A summary of all your flying this year!'
				}
				hashtag={'#DeltaFlightAttendants'}
			>
				<FacebookIcon size={45} round={true}></FacebookIcon>
			</FacebookShareButton>
			<LinkedinShareButton
				url={'https://travel-log-pied.vercel.app/'}
				style={{ margin: '4px' }}
				title={'My Travel Log'}
				summary={
					'A travel log for Delta flight attendants. A summary of all your flying this year!'
				}
				// source={'My Travel Log'}
			>
				<LinkedinIcon size={45} round={true}></LinkedinIcon>
			</LinkedinShareButton>
			<TwitterShareButton
				url={'https://travel-log-pied.vercel.app/'}
				style={{ margin: '4px' }}
				title={'My Travel Log'}
				hashtags={['#DeltaFlightAttendants', '#Travel', '#Airlines']}
			>
				<TwitterIcon size={45} round={true}></TwitterIcon>
			</TwitterShareButton>
			<EmailShareButton
				url={'https://travel-log-pied.vercel.app/'}
				style={{ margin: '4px' }}
				subject={'My Travel Log'}
				body={
					'Check this out! You can create a log of all your flying this year!'
				}
			>
				<EmailIcon size={45} round={true}></EmailIcon>
			</EmailShareButton>
		</>
	);
}
