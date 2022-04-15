import { Wrapper, Status } from '@googlemaps/react-wrapper';
import React from 'react';
import MapGoogle from '../../molecule/mapGoogle/MapGoogle';
import MarkerGoogle from '../../molecule/markerGoogle/MarkerGoogle';
import TMarker from '../../molecule/markerGoogle/type';
import TGooglePlaceMap from './type';
// import './style.css';

type Props = {
	data: TGooglePlaceMap;
};
const render = (status: Status) => {
	return <h1>{status}</h1>;
};

const GooglePlaceMap: React.FC<Props> = ({ data: { markers } }) => {
	// const [clicks, setClicks] = React.useState<google.maps.LatLng[]>([]);
	const [zoom, setZoom] = React.useState(7); // initial zoom
	const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
		lat: markers[0].lat,
		lng: markers[0].lng,
	});

	// const onClick = (e: google.maps.MapMouseEvent) => {
	//   // avoid directly mutating state
	//   setClicks([...clicks, e.latLng!]);
	// };

	// const onIdle = (m: google.maps.Map) => {
	//   setZoom(m.getZoom()!);
	//   setCenter(m.getCenter()!.toJSON());
	// };

	return (
		<div>
			<Wrapper
				apiKey={
					process.env.NEXT_PUBLIC_KEY_GOOGLE
						? process.env.NEXT_PUBLIC_KEY_GOOGLE
						: ''
				}
				render={render}
			>
				<MapGoogle center={center} zoom={zoom} style={{}}>
					{markers &&
						markers.length > 0 &&
						markers.map((marker: TMarker) => (
							<MarkerGoogle key={marker.lat} position={marker} />
						))}
				</MapGoogle>
			</Wrapper>
		</div>
	);
};
export default GooglePlaceMap;
