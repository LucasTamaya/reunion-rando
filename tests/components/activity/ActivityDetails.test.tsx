import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import * as ReactRouter from 'react-router-dom';

import { ActivityDetails } from '@/components/activity/ActivityDetails';
import { Activity } from '@/types';

vi.mock('react-router-dom', () => ({
  useLocation: vi.fn(),
  useNavigate: vi.fn(),
}));

describe('ActivityDetails Component', () => {
  it('should renders the component correctly with a user avatar', () => {
    // Mock location state with activityDetails data and a user avatar
    vi.spyOn(ReactRouter, 'useLocation').mockReturnValue({
      state: {
        title: 'Randonnée à Mafate',
        image_url: 'mafate.jpg',
        description: 'Superbe randonnée à Mafate',
        price: 40,
        location: 'Mafate',
        createdBy: {
          lastname: 'Doe',
          firstname: 'John',
          email: 'john.doe@gmail.com',
          avatar: 'avatar.jpg',
        },
        cloudinary_public_id: '',
        id: '',
        userId: '',
      } as Activity,
      pathname: '',
      key: 'key',
      hash: '',
      search: '',
    });

    render(<ActivityDetails />);

    const title = screen.getByRole('heading', { name: /randonnée à mafate/i });
    const hikeImage = screen.getByAltText(/randonnée/i);
    const description = screen.getByText(/superbe randonnée à mafate/i);
    const userFullName = screen.getByText(/doe john/i);
    const avatar = screen.getByTestId('avatar');
    const price = screen.getByText(/40 €/i);
    const location = screen.getByText('Mafate');
    const mailToLink = screen.getByRole('link');

    expect(title).toBeInTheDocument();
    expect(hikeImage).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(userFullName).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(location).toBeInTheDocument();
    expect(mailToLink).toBeInTheDocument();
    expect(mailToLink).toHaveAttribute('href', 'mailto:john.doe@gmail.com');
  });

  it('should renders the component correctly with a user avatar', () => {
    // Mock location state with activityDetails data and an empty user avatar
    vi.spyOn(ReactRouter, 'useLocation').mockReturnValue({
      state: {
        title: 'Randonnée à Mafate',
        image_url: 'mafate.jpg',
        description: 'Superbe randonnée à Mafate',
        price: 40,
        location: 'Mafate',
        createdBy: {
          lastname: 'Doe',
          firstname: 'John',
          email: 'john.doe@gmail.com',
          avatar: '',
        },
        cloudinary_public_id: '',
        id: '',
        userId: '',
      } as Activity,
      pathname: '',
      key: 'key',
      hash: '',
      search: '',
    });

    render(<ActivityDetails />);

    const title = screen.getByRole('heading', { name: /randonnée à mafate/i });
    const hikeImage = screen.getByAltText(/randonnée/i);
    const description = screen.getByText(/superbe randonnée à mafate/i);
    const userFullName = screen.getByText(/doe john/i);
    const emptyAvatarIcon = screen.getByTestId('emptyAvatarIcon');
    const price = screen.getByText(/40 €/i);
    const location = screen.getByText('Mafate');
    const mailToLink = screen.getByRole('link');

    expect(title).toBeInTheDocument();
    expect(hikeImage).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(userFullName).toBeInTheDocument();
    expect(emptyAvatarIcon).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(location).toBeInTheDocument();
    expect(mailToLink).toBeInTheDocument();
    expect(mailToLink).toHaveAttribute('href', 'mailto:john.doe@gmail.com');
  });
});
