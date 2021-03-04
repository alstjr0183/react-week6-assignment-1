import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      id: 1,
      name: '마법사주방',
      address: '서울시 강남구',
      menus: [
        { id: 1, type: '탕수육' },
      ],
    },
  }));

  function renderRestaurantContainer() {
    return render((
      <RestaurantContainer restaurantid="1" />
    ));
  }

  it('renders restaurant name', () => {
    const { container } = renderRestaurantContainer();

    expect(container).toHaveTextContent('마법사주방');
  });

  it('renders restaurant adress', () => {
    const { container } = renderRestaurantContainer();

    expect(container).toHaveTextContent('서울시 강남구');
  });

  it('renders restaurant menus', () => {
    const { container } = renderRestaurantContainer();

    expect(container).toHaveTextContent('탕수육');
  });
});
