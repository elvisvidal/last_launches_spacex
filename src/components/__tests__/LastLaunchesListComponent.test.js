import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import LastLaunchesList from '../LastLaunchesListComponent';
import { mockGetLastLaunches, mockLaunchesList } from '../__mocks__/launchServices';

global.fetch = mockGetLastLaunches;
const handleClick = jest.fn();
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('LastLaunchesList', () => {
  beforeEach(async () => {
    await act(async () => render(<LastLaunchesList />));
  })

  it('loads data on mount', () => {
    expect(
      screen.getByText(mockLaunchesList.data.launchesPast[0].mission_name)
    ).toBeInTheDocument();
  });

  it('go to details page on list click', () => {
    const cardTitle = screen.getByText(mockLaunchesList.data.launchesPast[0].mission_name);
    const card = cardTitle.parentElement.parentElement;
    card.onclick = handleClick;
    fireEvent.click(card);

    expect(handleClick).toBeCalled();
  })
});
