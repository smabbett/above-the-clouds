import React, { useState } from 'react';
import classNames from '../utils/class-names';

export default function QuestionDetail({ question }) {
	const [isActive, setIsActive] = useState(false);

	return (
		<div>
			<p className='question' onClick={() => setIsActive(!isActive)}>
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
			{isActive ? <p>{question.answer}</p> : ''}
		</div>
	);
}
