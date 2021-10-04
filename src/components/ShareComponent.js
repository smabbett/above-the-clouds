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
	const shareUrl = 'https://intheclouds.us/';

	return (
		<>
			<FacebookShareButton
				url={shareUrl}
				style={{ margin: '4px' }}
				quote={
					'A travel log for Delta flight attendants. A summary of all your flying this year!'
				}
				hashtag={'#DeltaFlightAttendants'}
			>
				<FacebookIcon size={45} round={true}></FacebookIcon>
			</FacebookShareButton>
			<LinkedinShareButton
				url={shareUrl}
				style={{ margin: '4px' }}
				title={'In The Clouds'}
				summary={
					'A fun, interactive travel log for Delta flight attendants. A summary of all your flying this year!'
				}
				source={'In The Clouds'}
			>
				<LinkedinIcon size={45} round={true}></LinkedinIcon>
			</LinkedinShareButton>
			<TwitterShareButton
				url={shareUrl}
				style={{ margin: '4px' }}
				title={'In The Clouds'}
				hashtags={['#DeltaFlightAttendants', '#Travel', '#Airlines']}
			>
				<TwitterIcon size={45} round={true}></TwitterIcon>
			</TwitterShareButton>
			<EmailShareButton
				url={shareUrl}
				style={{ margin: '4px' }}
				subject={'In The Clouds'}
				body={
					'A fun, interactive travel log for Delta flight attendants. A summary of all your flying this year!'
				}
			>
				<EmailIcon size={45} round={true}></EmailIcon>
			</EmailShareButton>
		</>
	);
}
