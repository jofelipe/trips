import client from 'graphql/client';

import HomeTemplate from 'templates/Home';

import { IMap } from 'components/Map';
import { GET_PLACES } from 'graphql/queries';
import { GetPlacesQuery } from 'graphql/generated/graphql';

export default function Home({ places }: IMap) {
  return <HomeTemplate places={places} />;
}

export const getStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES);

  return {
    props: {
      places
    }
  };
};
