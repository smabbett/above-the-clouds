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
		const divToDisplay = document.getElementById('share-canvas');
		html2canvas(divToDisplay, {
			allowTaint: true,
			useCORS: true,
			windowWidth: '1280px',
		}).then(function (canvas) {
			link = document.createElement('a');
			document.body.appendChild(link);
			link.download = 'my-flights.png';
			link.href = canvas.toDataURL('image/png');
			//link.href = canvas.toBlob()
			link.target = '_blank';

			// link.addEventListener('click', function () {
			// 	let x = window.open();
			// 	let iframe = x.document.createElement('iframe');
			// 	iframe.width = '100%';
			// 	iframe.height = '100%';
			// 	iframe.style = 'border: 0';
			// 	iframe.src = link.href;
			// 	x.document.body.appendChild(iframe);
			// });
			link.click();
		});
	};
	// const downloadImage = () => {
	// 	var canvas = document.getElementById('share-canvas');

	// 	canvas.toBlob(function (blob) {
	// 		var newImg = document.createElement('img'),
	// 			url = URL.createObjectURL(blob);

	// 		newImg.onload = function () {
	// 			// no longer need to read the blob so it's revoked
	// 			URL.revokeObjectURL(url);
	// 		};

	// 		newImg.src = url;
	// 		document.body.appendChild(newImg);
	// 	});
	// };

	// function PrintDiv(div) {
	// 	html2canvas(div, {

	// 		onrendered: function (canvas) {
	// 			var myImage = canvas.toDataURL();
	// 			downloadURI(myImage, 'my-flights.png');
	// 		},
	// 	});
	// }

	// function downloadURI(uri, name) {
	// 	var link = document.createElement('a');

	// 	link.download = name;
	// 	link.href = uri;
	// 	document.body.appendChild(link);
	// 	link.click();
	//after creating link you should delete dynamic link
	//clearDynamicLink(link);
	//	}

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
