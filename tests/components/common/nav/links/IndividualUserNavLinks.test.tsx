import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { IndividualUserNavLinks } from '@/components/common/nav/links/IndividualUserNavLinks';
import { RouterWrapper } from '@tests/helpers/RouterWrapper';

const MockedComponent: React.FC = () => {
  return (
    <RouterWrapper>
      <IndividualUserNavLinks />
    </RouterWrapper>
  );
};

describe('IndividualUserNavLinks Component', () => {
  it('should renders 3 links', () => {
    render(<MockedComponent />);

    const linkOne = screen.getByRole('link', {
      name: /activités du moment/i,
    });
    const linkTwo = screen.getByRole('link', {
      name: /nos experts du terrain/i,
    });
    const linkThree = screen.getByRole('link', {
      name: /mes favoris/i,
    });

    expect(linkOne).toBeInTheDocument();
    expect(linkOne).toHaveAttribute('href', '/activites-du-moment');
    expect(linkTwo).toBeInTheDocument();
    expect(linkTwo).toHaveAttribute('href', '/nos-experts-du-terrain');
    expect(linkThree).toBeInTheDocument();
    expect(linkThree).toHaveAttribute('href', '/mes-favoris');
  });
});
