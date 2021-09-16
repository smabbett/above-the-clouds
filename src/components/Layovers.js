import React from 'react';
import { Chart } from 'react-google-charts';

function Layovers({ list }) {
	//use Map to count layovers by city
	let result = new Map();
	list.forEach((item) => {
		if (item.layover_stn !== '   ') {
			if (!result.has(item.layover_stn + ' airport')) {
				result.set(item.layover_stn + ' airport', 1);
			} else {
				let count = result.get(item.layover_stn + ' airport');
				result.set(item.layover_stn + ' airport', ++count);
			}
		}
	});

	return (
		<>
			<div className='col-12'>
				<div className='card shadow'>
					<h4 className='card-header'>My Layovers</h4>
					<div className='card-body'>
						<div className='row'>
							<div className='col-sm'>
								<Chart
									width={'100%'}
									height={'300px'}
									chartType='PieChart'
									loader={<div>Loading Chart</div>}
									data={[['Airport Code', 'Number of Visits'], ...result]}
									options={{
										title: 'My Layovers',
										// sliceVisibilityThreshold: 0.05, //5%
										is3D: true,
									}}
									rootProps={{ 'data-testid': '1' }}
								/>
							</div>

							<div className='col-sm'>
								<Chart
									width={'500px'}
									height={'300px'}
									chartType='GeoChart'
									data={[['City', 'Layovers'], ...result]}
									options={{
										displayMode: 'markers',
										colorAxis: { colors: ['#EFF2C0', '#A52422'] },
										backgroundColor: '#C2E4FF',
										datalessRegionColor: '#28536B',
										enableRegionInteractivity: true,
										sizeAxis: { minValue: 0, maxSize: 10 },
									}}
									mapsApiKey='AIzaSyBwWq-oJkR_gEeqnY-mPI8LCneQg6zvX38'
									rootProps={{ 'data-testid': '2' }}
								/>

								{/* <Chart
									width={'100%'}
									height={'300px'}
									chartType='Bar'
									loader={<div>Loading Chart</div>}
									data={[['Airport Code', 'Layovers'], ...result]}
									options={{
										// Material design options
										chart: {
											title: 'My Layovers',
										},
									}}
									// For tests
									rootProps={{ 'data-testid': '2' }}
								/> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Layovers;
