import { fireEvent, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import * as ReactRouter from 'react-router-dom';

import { ActivityDetails } from '@/screens/ActivityDetails';
import { Activity } from '@/types';
import { HelmetSeoWrapper } from '@tests/helpers/HelmetSeoWrapper';
import { renderWithClient } from '@tests/config/mswUtils';
import { server } from '@tests/config/server';
import { rest } from 'msw';

vi.mock('react-router-dom', () => ({
  useLocation: vi.fn(),
  useNavigate: vi.fn(),
}));

const MockedComponent: React.FC = () => {
  return (
    <HelmetSeoWrapper>
      <ActivityDetails />
    </HelmetSeoWrapper>
  );
};

beforeEach(() => {
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
      cloudinary_public_id: '1',
      id: '2',
      createdById: '3',
    } as Activity,
    pathname: '',
    key: 'key',
    hash: '',
    search: '',
  });
});

describe('ActivityDetails Screen', () => {
  it('should render the correct title, image, and description of the activity', () => {
    renderWithClient(<MockedComponent />);

    const title = screen.getByRole('heading', { name: /randonnée à mafate/i });
    const image = screen.getByRole('img', { name: /randonnée/i });
    const description = screen.getByText(/superbe randonnée à mafate/i);

    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('should render the correct author name and avatar image if an avatar is provided', () => {
    renderWithClient(<MockedComponent />);

    const authorName = screen.getByText(/doe john/i);
    const avatar = screen.getByTestId('avatar');

    expect(authorName).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
  });

  it('should render a placeholder icon if no avatar is provided', () => {
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
        cloudinary_public_id: '1',
        id: '2',
        createdById: '3',
      } as Activity,
      pathname: '',
      key: 'key',
      hash: '',
      search: '',
    });
    renderWithClient(<MockedComponent />);

    const placeholderIcon = screen.getByTestId('avatarPlaceholderIcon');

    expect(placeholderIcon).toBeInTheDocument();
  });

  it('should render the correct price and location of the activity', () => {
    renderWithClient(<MockedComponent />);

    const price = screen.getByText(/40 €/i);
    const location = screen.getByText('Mafate');

    expect(price).toBeInTheDocument();
    expect(location).toBeInTheDocument();
  });

  it('should render the correct contact link', () => {
    renderWithClient(<MockedComponent />);

    const email = 'john.doe@gmail.com';
    const contactLink = screen.getByRole('link', {
      name: /contacter le prestataire/i,
    });

    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', `mailto:${email}`);
  });

  it('should render an "Ajoutez à mes favoris" button', () => {
    renderWithClient(<MockedComponent />);

    const button = screen.getByRole('button', {
      name: /ajouter à mes favoris/i,
    });

    expect(button).toBeInTheDocument();
  });

  it('should render a success message if there are no errors when the user clicks on the "Ajoutez à mes favoris" button', async () => {
    renderWithClient(<MockedComponent />);

    fireEvent.click(
      screen.getByRole('button', {
        name: /ajouter à mes favoris/i,
      })
    );

    const successMessage = await screen.findByText(
      /activité ajoutée aux favoris !/i
    );

    expect(successMessage).toBeInTheDocument();
  });

  it('should render a message if the user has already saved the activity', async () => {
    server.use(
      rest.patch('*/activity/2/save', (_, res, ctx) => {
        return res(ctx.status(409));
      })
    );

    renderWithClient(<MockedComponent />);

    fireEvent.click(
      screen.getByRole('button', {
        name: /ajouter à mes favoris/i,
      })
    );

    const message = await screen.findByText(
      /l'activité a déjà été ajoutée aux favoris/i
    );

    expect(message).toBeInTheDocument();
  });

  it('should render an error message if there are any errors when the user clicks on the "Ajoutez à mes favoris" button', async () => {
    server.use(
      rest.patch('*/activity/2/save', (_, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    renderWithClient(<MockedComponent />);

    fireEvent.click(
      screen.getByRole('button', {
        name: /ajouter à mes favoris/i,
      })
    );

    const errorMessage = await screen.findByText(
      /une erreur est survenue, veuillez réessayer/i
    );

    expect(errorMessage).toBeInTheDocument();
  });
});
