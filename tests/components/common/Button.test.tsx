import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Button } from '@/components/common/Button';

describe('Button Component', () => {
  it('should renders the correct text when isLoading is false', () => {
    render(<Button text="Envoyer" variant="primary" isLoading={false} />);

    const text = screen.getByRole('button', { name: /envoyer/i });

    expect(text).toBeInTheDocument();
  });

  it('should renders the loading spinner when isLoading is true', () => {
    render(<Button text="Envoyer" variant="primary" isLoading={true} />);

    const loadingSpinner = screen.getByTestId('loadingSpinner');

    expect(loadingSpinner).toBeInTheDocument();
  });

  it('should renders the button with a green backgound when variant is primary', () => {
    render(<Button text="Envoyer" variant="primary" isLoading={false} />);

    const button = screen.getByRole('button', { name: /envoyer/i });

    expect(button).toHaveClass('bg-main-green');
  });

  it('should renders the button with a grey background when variant is secondary', () => {
    render(<Button text="Envoyer" variant="secondary" isLoading={false} />);

    const button = screen.getByRole('button', { name: /envoyer/i });

    expect(button).toHaveClass('bg-main-grey');
  });

  it('should calls the handleClick prop function when the user clicks on the button', () => {
    const mockedHandleClick = vi.fn();

    render(
      <Button
        text="Envoyer"
        variant="primary"
        isLoading={false}
        handleClick={mockedHandleClick}
      />
    );

    const button = screen.getByRole('button', { name: /envoyer/i });
    fireEvent.click(button);

    expect(mockedHandleClick).toHaveBeenCalledTimes(1);
  });
});
