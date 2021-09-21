import React from 'react';
import AboutModal from './AboutModal';
import formatRotations from '../utils/formatRotations';
import TravelLog from '../components/TravelLog';

export default function Dashboard({ rotations, setRotations }) {
	const demo = require('../data/demo-data');
	// const [rotations, setRotations] = useState([]);
	const [modalShow, setModalShow] = React.useState(true);

	//create array of flight segments
	let list = [];
	for (let value of rotations.values()) {
		list.push(...value.segments);
	}

	const handleHide = () => {
		setModalShow(false);
		const rotationsMap = formatRotations([...demo]);
		setRotations(rotationsMap);
	};

	if (rotations.size) {
		return <TravelLog rotations={rotations} />;
	} else {
		return (
			<>
				<AboutModal show={modalShow} onHide={handleHide} />
			</>
		);
	}
}
