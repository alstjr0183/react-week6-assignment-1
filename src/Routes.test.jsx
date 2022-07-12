import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Routes from './Routes';

describe('Routes', () => {
  function renderRoutes({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <Routes />
      </MemoryRouter>
    ));
  }

  context('path가 / 일때', () => {
    it('Homepage가 렌더링된다', () => {
      const { container } = renderRoutes({ path: '/' });

      expect(container).toHaveTextContent('About');
    });
  });

  context('path가 /about 일때', () => {
    it('Homepage가 렌더링된다', () => {
      const { container } = renderRoutes({ path: '/' });

      expect(container).toHaveTextContent('About');
    });
  });
});
