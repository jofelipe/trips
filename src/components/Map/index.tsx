import { useState } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from 'components/Marker';

type IPlace = {
  id: string;
  name: string;
  slug: string;
  bucketlist: boolean;
  location: {
    latitude: number;
    longitude: number;
  };
};

export type IMap = {
  places?: IPlace[];
};

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
    ],
    restriction: {
      latLngBounds: { north: 83.8, south: -57, west: -180, east: 180 }
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getMapBounds = (map: any, maps: any, places: IPlace[]) => {
    const bounds = new maps.LatLngBounds();

    places
      .filter((place) => !place.bucketlist)
      .forEach((place) => {
        bounds.extend(
          new maps.LatLng(place.location.latitude, place.location.longitude)
        );
      });
    return bounds;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bindResizeListener = (map: any, maps: any, bounds: any) => {
    maps.event.addDomListenerOnce(map, 'idle', () => {
      maps.event.addDomListener(window, 'resize', () => {
        map.fitBounds(bounds);
      });
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const apiIsLoaded = (map: any, maps: any, places: any) => {
    const bounds = getMapBounds(map, maps, places);
    map.fitBounds(bounds);
    bindResizeListener(map, maps, bounds);
  };

  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: String(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API)
      }}
      defaultCenter={mapOptions.center}
      defaultZoom={mapOptions.zoom}
      zoom={mapOptions.zoom}
      options={googleMapApiOptions}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, places)}
    >
      {places?.map(({ id, name, location, slug, bucketlist }) => (
        <Marker
          key={id}
          title={name}
          lat={location.latitude}
          lng={location.longitude}
          slug={slug}
          bucketlist={bucketlist}
        />
      ))}
    </GoogleMapReact>
  );
};

export default Map;
