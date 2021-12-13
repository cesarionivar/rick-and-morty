import React from 'react';
import { render, screen } from '@testing-library/react';
import Home, { getStaticProps } from '../../pages/index';
import { resultApi } from '../mocks/resultApi';

describe('Test in Home page', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should call rick and morty api', async () => {
    fetch.mockResponseOnce(JSON.stringify(resultApi));

    const response = await getStaticProps();
    expect(response).toEqual(
      expect.objectContaining({
        props: {
          characters: resultApi,
        },
      })
    );
  });

  it('renders the title of the page', () => {
    render(<Home characters={resultApi} />);
    expect(
      screen.getByText('The Rick And Morty Characters')
    ).toBeInTheDocument();

    expect(screen.getByText('The Rick And Morty Characters')).toMatchSnapshot();
  });
});
