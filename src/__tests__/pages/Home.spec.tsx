import React from 'react';
import { render } from '@testing-library/react';

import Home from 'pages/Home';

import withMovies from 'containers/movies';

const Container = withMovies(Home);

describe('Home page', () => {
  it('must redrive without data', () => {
    const result = render(<Container />);
    expect(result).toMatchSnapshot();
  });
});
