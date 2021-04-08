import { render, screen } from '@testing-library/react';

import Map from '.';

describe('<Map />', () => {
  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Campinas',
      slug: 'campinas',
      location: {
        latitude: 0,
        longitude: 0
      }
    };

    const placeTwo = {
      id: '2',
      name: 'Modena',
      slug: 'modena',
      location: {
        latitude: 44.6458885,
        longitude: 10.9255707
      }
    };

    render(<Map places={[place, placeTwo]} />);

    expect(screen.getByTitle(/campinas/i)).toBeInTheDocument();
    expect(screen.getByTitle(/modena/i)).toBeInTheDocument();
  });
});
