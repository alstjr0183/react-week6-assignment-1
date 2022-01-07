import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';

import REGIONS from '../../fixtures/regions';
import CATEGORIES from '../../fixtures/categories';
import RESTAURANTS from '../../fixtures/restaurants';

jest.mock('react-redux');
describe('RestaurantsPage', () => {
  const SEOUL = REGIONS[0];
  const KOREAN_FOOD = CATEGORIES[0];

  const renderRestaurantPage = () => render((
    <MemoryRouter>
      <RestaurantsPage />
    </MemoryRouter>
  ));

  context('selected a Region and a Category', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        regions: REGIONS,
        selectedRegion: SEOUL,
        categories: CATEGORIES,
        selectedCategory: KOREAN_FOOD,
        restaurants: RESTAURANTS,
      }));
    });

    it('renders RestaurantsPage with (V)', () => {
      const { getByText } = renderRestaurantPage();

      expect(getByText(`${SEOUL.name}(V)`)).not.toBeNull();
      expect(getByText(`${KOREAN_FOOD.name}(V)`)).not.toBeNull();

      REGIONS.slice(1).forEach((REGION) => {
        expect(getByText(REGION.name)).not.toBeNull();
      });
      CATEGORIES.slice(1).forEach((CATEGORY) => {
        expect(getByText(CATEGORY.name)).not.toBeNull();
      });
      RESTAURANTS.forEach((RESTAURANT) => {
        expect(getByText(RESTAURANT.name));
      });
    });
  });

  context('selected nothing', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        regions: REGIONS,
        categories: CATEGORIES,
        restaurants: [],
      }));
    });

    it('renders RestaurantsPage without (V)', () => {
      const { getByText } = renderRestaurantPage();

      REGIONS.forEach((REGION) => {
        expect(getByText(REGION.name)).not.toBeNull();
      });
      CATEGORIES.forEach((CATEGORY) => {
        expect(getByText(CATEGORY.name)).not.toBeNull();
      });
    });
  });
});
