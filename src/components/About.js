import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './About.css';

export default function About() {
	const [state, handleSubmit] = useForm('xjvjella');
	if (state.succeeded) {
		return <h1 className='text-center mt-4'>Thanks for your feedback!</h1>;
	}
	return (
		<div className='my-4'>
			<div className='row'>
				<div className='col-md-6 mx-auto mt-4'>
					<p>Thanks for stopping by! I hope you enjoy this website! </p>
					<p>
						I flew for Delta and Nortwest from 1996 to 2020. I had a great
						career full of adventures and made lots of amazing friendships along
						the way. But, throughout my career, I kept wondering what if...
					</p>
					<p>
						Today, I am starting a new chapter in my life as a web developer. I
						completed two coding bootcamps. The first in 2017 and the second in
						2021. I'm very excited to see what I can build and create as a
						developer. Wish me luck!
					</p>
					<p className='signature'>Sarah Abbett</p>

					<div className='mb-4 social-icons'>
						<a
							className='social-icon'
							href='https://www.linkedin.com/in/sarah-abbett/'
							target='_blank'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='30'
								height='30'
								fill='currentColor'
								className='bi bi-linkedin'
								viewBox='0 0 16 16'
							>
								<path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
							</svg>
						</a>
						<a
							className='social-icon'
							href='https://github.com/smabbett'
							target='_blank'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='30'
								height='30'
								fill='currentColor'
								className='bi bi-github'
								viewBox='0 0 16 16'
							>
								<path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
							</svg>
						</a>
						<a
							className='social-icon'
							href='https://docs.google.com/document/d/1fGK_n9kVKUYR_9iGnCwQS61ba4z8_QVJ90wfWaxu8p0/edit?usp=sharing'
							target='_blank'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='30'
								height='30'
								fill='currentColor'
								className='bi bi-file-earmark-text'
								viewBox='0 0 16 16'
							>
								<path d='M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z' />
								<path d='M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z' />
							</svg>
						</a>
					</div>
					<hr></hr>
					<h1 className='w-50 mx-auto'>Contact Me</h1>
					<form onSubmit={handleSubmit}>
						<div className='form-group'>
							<input
								className='form-control'
								id='name'
								type='text'
								name='name'
								placeholder='Name'
							/>
							<ValidationError
								prefix='Name'
								field='name'
								errors={state.errors}
							/>
						</div>

						<div className='form-group'>
							<input
								className='form-control'
								id='email'
								type='email'
								name='email'
								placeholder='Email'
							/>
							<ValidationError
								prefix='Email'
								field='email'
								errors={state.errors}
							/>
						</div>

						<div className='form-group'>
							<textarea
								className='form-control'
								rows='3'
								id='message'
								name='message'
								placeholder='Your message'
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
	);
}
