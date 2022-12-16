import { UserProviderCard } from '@/components/user/provider/UserProviderCard';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

const lastname = 'Doe';
const firstname = 'John';
const email = 'john.doe@gmail.com';
const avatar = 'avatar.jpg';

describe('UserProviderCard Component', () => {
  it('should renders the last and first names of the user', () => {
    render(
      <UserProviderCard
        lastname={lastname}
        firstname={firstname}
        email={email}
        avatar={avatar}
      />
    );

    expect(screen.getByText(lastname)).toBeInTheDocument();
    expect(screen.getByText(firstname)).toBeInTheDocument();
  });

  it('should renders the email of the user', () => {
    render(
      <UserProviderCard
        lastname={lastname}
        firstname={firstname}
        email={email}
        avatar={avatar}
      />
    );

    expect(screen.getByText(/john.doe@gmail.com/i)).toBeInTheDocument();
  });

  it('should renders an image if avatar props is set', () => {
    render(
      <UserProviderCard
        lastname={lastname}
        firstname={firstname}
        email={email}
        avatar={avatar}
      />
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should renders an empty avatar icon if the avatar props is empty', () => {
    render(
      <UserProviderCard
        lastname={lastname}
        firstname={firstname}
        email={email}
        avatar=""
      />
    );

    expect(screen.getByTestId('emptyAvatarIcon')).toBeInTheDocument();
  });

  it('should renders a button with a link to contact the provider', () => {
    render(
      <UserProviderCard
        lastname={lastname}
        firstname={firstname}
        email={email}
        avatar=""
      />
    );

    const button = screen.getByText(/contacter/i);
    const link = screen.getByRole('link');

    expect(button).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', `mailto:${email}`);
  });
});
