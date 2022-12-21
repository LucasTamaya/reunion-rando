import { describe, it, expect } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';

import { ManageActivityCard } from '@/components/activity/ManageActivityCard';
import { RouterWrapper } from '@tests/helpers/RouterWrapper';
import { renderWithClient } from '@tests/config/mswUtils';

const imageUrl = 'image.jpg';

const MockedComponent: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  return (
    <RouterWrapper>
      <ManageActivityCard
        title="Randonnée à Mafate"
        location="Mafate"
        description="Superbe marche à Mafate"
        price={40}
        id="1"
        userId="1"
        image_url={imageUrl}
        cloudinary_public_id="1"
        createdBy={{
          avatar: 'avatar.jpg',
          email: 'john.doe@gmail.com',
          firstname: 'John',
          lastname: 'Doe',
        }}
      />
    </RouterWrapper>
  );
};

describe('ManageActivityCard Component', () => {
  it('should render the component correctly', () => {
    renderWithClient(<MockedComponent imageUrl={imageUrl} />);

    const image = screen.getByRole('img', {
      name: /activité/i,
    });
    const title = screen.getByRole('heading', {
      name: /randonnée à mafate/i,
    });
    const price = screen.getByText(/40€/i);
    const trashcanIcon = screen.getByTestId('trashcanIcon');
    const editIcon = screen.getByTestId('editIcon');

    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(trashcanIcon).toBeInTheDocument();
    expect(editIcon).toBeInTheDocument();
  });

  it('should render an empty image icon if there is no image_url', () => {
    renderWithClient(<MockedComponent imageUrl="" />);

    expect(screen.getByTestId('emptyImageIcon')).toBeInTheDocument();
  });

  it('should open the DeleteModal component if the user clicks on the trashcan icon', () => {
    renderWithClient(<MockedComponent imageUrl={imageUrl} />);

    const trashcanIcon = screen.getByTestId('trashcanIcon');
    fireEvent.click(trashcanIcon);

    const deleteModalTitle = screen.getByRole('heading', {
      name: /êtes-vous sûr de vouloir supprimer cette activité \?/i,
    });
    const deleteModalCancelBtn = screen.getByRole('button', {
      name: /annuler/i,
    });
    const deleteModalDeleteBtn = screen.getByRole('button', {
      name: /supprimer/i,
    });

    expect(deleteModalTitle).toBeInTheDocument();
    expect(deleteModalCancelBtn).toBeInTheDocument();
    expect(deleteModalDeleteBtn).toBeInTheDocument();
  });

  it('should redirect the user to UpdateActivity screen if he clicks on the edit icon', () => {
    renderWithClient(<MockedComponent imageUrl={imageUrl} />);

    const editIcon = screen.getByTestId('editIcon');
    fireEvent.click(editIcon);

    expect(window.location.pathname).toEqual('/modification-activite/1');
  });
});
