import React from 'react';

import AboutPage from './AboutPage';

import { render } from '@testing-library/react';

test('AboutPage', () => {

  const { container } = render((
    <AboutPage />
  ));
  expect(container).toHaveTextContent('About');
});