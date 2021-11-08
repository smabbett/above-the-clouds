import React from 'react';
import html2canvas from 'html2canvas';
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
	let link = '';

	const downloadImage = () => {
		if (window.screen.width < 1024) {
			document
				.getElementById('viewport')
				.setAttribute('content', 'width=1400px');
		}
		const divToDisplay = document.getElementById('share-canvas');
		html2canvas(divToDisplay, {
			allowTaint: true,
			useCORS: true,
		}).then(function (canvas) {
			link = document.createElement('a');
			document.body.appendChild(link);
			link.download = 'my-flights.png';
			link.href = canvas.toDataURL('image/png');
			link.target = '_blank';
			link.click();
		});
		if (window.screen.width < 1024) {
			document
				.getElementById('viewport')
				.setAttribute('content', 'width=device-width, initial-scale=1');
		}
	};

	return (
		<>
			<FacebookShareButton
				// beforeOnClick={downloadImage}
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
			<button
				className='btn btn-danger rounded-circle m-2'
				style={{ width: '45px', height: '45px' }}
				onClick={downloadImage}
			>
				<span className='oi oi-data-transfer-download'></span>
			</button>
		</>
	);
}
