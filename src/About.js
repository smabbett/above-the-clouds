import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './About.css';

export default function About() {
	const [state, handleSubmit] = useForm('xjvjella');
	if (state.succeeded) {
		return <h1 className='text-center mt-4'>Thanks for your feedback!</h1>;
	}
	return (
		<>
			<div className='row'>
				<div className='card col-5 m-auto about'>
					<div className='card-body'>
						<div className='card-text'>
							<p>
								{' '}
								I am a former flight attendant and new web developer. As a
								flight attendant, each year Delta provided a data file with
								details about all my flying for the year. I decided to create
								something fun with that. I created this website to enhance my
								<a href='https://abbett-resume.vercel.app/' target='blank'>
									{' '}
									portfolio{' '}
								</a>
								and, to be honest, because I love to see what I've done in my
								career as a flight attendant. I really hope you enjoy it!
							</p>{' '}
							<p>
								If you have any ideas for how to improve the page, please send
								me a message. If you'd like to show your appreciation,{' '}
								<a href='https://www.buymeacoffee.com/smabbett' target='blank'>
									buy me a coffee!
								</a>
							</p>
							<p className='signature'>Sarah Abbett</p>
						</div>
					</div>
				</div>

				<div className='card w-50 m-3'>
					<div className='card-header'>Feedback</div>
					<div className='card-body'>
						<div className='card-text'>
							<form onSubmit={handleSubmit}>
								<div className='form-group'>
									<label htmlFor='name' className='form-label'>
										Name:{' '}
									</label>
									<input
										className='form-control'
										id='name'
										type='text'
										name='name'
									/>
									<ValidationError
										prefix='Name'
										field='name'
										errors={state.errors}
									/>
								</div>

								<div className='form-group'>
									<label htmlFor='email' className='form-label'>
										Email Address:{' '}
									</label>
									<input
										className='form-control'
										id='email'
										type='email'
										name='email'
									/>
									<ValidationError
										prefix='Email'
										field='email'
										errors={state.errors}
									/>
								</div>

								<div className='form-group'>
									<label htmlFor='message' className='form-label'>
										Your message:{' '}
									</label>
									<textarea
										className='form-control'
										rows='3'
										id='message'
										name='message'
									/>
									<ValidationError
										prefix='Message'
										field='message'
										errors={state.errors}
									/>
								</div>

								<button
									className='btn btn-primary'
									type='submit'
									disabled={state.submitting}
								>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
