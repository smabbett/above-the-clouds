import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import selfie from '../images/selfie_green.jpg';
import './AboutModal.css';

export default function AboutModal(props) {
	return (
		<Modal
			{...props}
			size='md'
			aria-labelledby='contained-modal-title-vcenter'
			centered
		>
			{/* <Modal.Header closeButton> */}
			<Modal.Header>
				<Modal.Title className='modal-title'>Hello World!</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>
					{' '}
					I am a former flight attendant and new web developer. As a flight
					attendant, each year Delta provided a data file with details about all
					my flying for the year. I decided to create something fun with that. I
					created this website to enhance my
					<a href='https://abbett-resume.vercel.app/' target='blank'>
						{' '}
						portfolio{' '}
					</a>
					and, to be honest, because I love to see what I've done in my career
					as a flight attendant.
				</p>
				<p> I really hope you enjoy it!</p>{' '}
				<img className='selfie' src={selfie} alt={'selection page'} />
				<p className='signature'>Sarah Abbett</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>View the Demo</Button>
			</Modal.Footer>
		</Modal>
	);
}
