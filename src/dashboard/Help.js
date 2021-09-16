import React from 'react';
import screenshot1 from '../images/screenshot1.png';
import screenshot2 from '../images/screenshot2.png';
import screenshot3 from '../images/screenshot3.png';

function Help() {
	return (
		<>
			<div className='card m-4'>
				<div className='card-body'>
					<ul>
						<li className='card-text'>Log in to iCrew</li>

						<li className='card-text'>
							Select <b>F/A Preference</b> under the <b>Schedules</b> Menu on
							the far left.
						</li>
					</ul>
					<img className='card-img' src={screenshot1} alt={'iCrew Home Page'} />
				</div>
			</div>
			<div className='card m-4'>
				<div className='card-body'>
					<ul>
						<li className='card-text'>
							Select <b>Schedule Leg Data Extract</b>, the first item on the
							page.
						</li>
					</ul>
					<img className='card-img' src={screenshot2} alt={'selection page'} />
				</div>
			</div>
			<div className='card m-4'>
				<div className='card-body'>
					<ul>
						<li className='card-text'>
							Select <b>eMail 2020 Schedule Leg Data to your company account</b>
							.
						</li>
					</ul>
					<img
						className='card-img'
						src={screenshot3}
						alt={'select email page'}
					/>
				</div>
			</div>
			<div className='card m-4'>
				<div className='card-body'>
					<ul>
						<li className='card-text'>
							Check your company email for a message with an attachment. The
							file name will be similar to <b>2016_SCHEDULE_DATA.CSV</b>. Click
							on the attachment and download to your computer.
						</li>
						<li className='card-text'>
							Locate the file on your computer. On a Mac, check the Downloads
							folder. Hold and drag the file over the drop zone on the web page.
							Your data will be displayed on the web page.
						</li>
					</ul>
					<small>
						Your data is not being saved. This is for your information only.
					</small>
				</div>
			</div>
		</>
	);
}
export default Help;
