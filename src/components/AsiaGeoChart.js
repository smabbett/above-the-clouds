import React from 'react';
import Chart from 'react-google-charts';

export default function AsiaGeochart({ result }) {
	return (
		<Chart
			width={'100%'}
			height={'300px'}
			chartType='GeoChart'
			data={[['City', 'Layovers'], ...result]}
			options={{
				region: '142',
				displayMode: 'markers',
				colorAxis: { colors: ['#f72585', '#3a0ca3'] },
				backgroundColor: '#cbe6ee',
				datalessRegionColor: '#EAEAEA',
				enableRegionInteractivity: true,
				sizeAxis: { minValue: 0, maxSize: 10 },
			}}
			mapsApiKey='AIzaSyBwWq-oJkR_gEeqnY-mPI8LCneQg6zvX38'
			rootProps={{ 'data-testid': '3' }}
		/>
	);
}
