import React from 'react';
import { render, screen, act } from '@testing-library/react';
import LaunchDetails from '../LaunchDetailsComponent';
import { mockGetLaunchById, mockLaunchDetails } from '../__mocks__/launchServices';

global.fetch = mockGetLaunchById;
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
  useParams: () => jest.fn(),
}));

describe('LaunchDetails', () => {
  beforeEach(async () => {
    await act(async () => render(<LaunchDetails />));
  })

  it('loads data on mount', () => {
    expect(
      screen.getByText(mockLaunchDetails.data.launch.mission_name)
    ).toBeInTheDocument();
  });
});
