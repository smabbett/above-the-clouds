import React, { useState } from 'react';
import classNames from '../utils/class-names';

export default function QuestionDetail({ question }) {
	const [isActive, setIsActive] = useState(false);

	return (
		<>
			<hr></hr>
			<p className='question d-flex' onClick={() => setIsActive(!isActive)}>
				<span
					className={classNames({
						oi: true,
						'mr-2': true,
						'oi-chevron-bottom': isActive,
						'oi-chevron-right': !isActive,
					})}
				/>
				{question.question}
			</p>
			{isActive ? <p className='ml-4 mr-2'>{question.answer}</p> : ''}
		</>
	);
}
