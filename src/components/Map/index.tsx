import { useState } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from 'components/Marker';

interface IPlace {
  id: string;
  name: string;
  slug: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

interface IMap {
  places?: IPlace[];
}

const Map = ({ places }: IMap) => {
  const [mapOptions] = useState({
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 0
  });

  const googleMapApiOptions = {
    disableDefaultUI: true,
    styles: [
      {
        featureType: 'all',
        elementType: 'labels.text.fill',
        stylers: [{ saturation: 36 }, { color: '#000000' }, { lightness: 40 }]
      },
      {
        featureType: 'all',
        elementType: 'labels.text.stroke',
        stylers: [{ visibility: 'on' }, { color: '#000000' }, { lightness: 16 }]
      },
      {
        featureType: 'all',
        elementType: 'labels.icon',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.fill',
        stylers: [{ color: '#000000' }, { lightness: 20 }]
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#000000' }, { lightness: 17 }, { weight: 1.2 }]
      },
      {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [{ color: '#000000' }, { lightness: 20 }]
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{ color: '#000000' }, { lightness: 21 }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [{ color: '#000000' }, { lightness: 17 }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#000000' }, { lightness: 29 }, { weight: 0.2 }]
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{ color: '#000000' }, { lightness: 18 }]
      },
      {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [{ color: '#000000' }, { lightness: 16 }]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#000000' }, { lightness: 19 }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#000000' }, { lightness: 17 }]
      }
    ]
  };

  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: String(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API)
      }}
      defaultCenter={mapOptions.center}
      defaultZoom={mapOptions.zoom}
      center={{
        lat: mapOptions.center.lat,
        lng: mapOptions.center.lng
      }}
      zoom={mapOptions.zoom}
      options={googleMapApiOptions}
    >
      {places?.map(({ id, name, location }) => (
        <Marker
          key={id}
          title={name}
          lat={location.latitude}
          lng={location.longitude}
        />
      ))}
    </GoogleMapReact>
  );
};

export default Map;
