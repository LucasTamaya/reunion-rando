import { useField } from 'formik';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Input } from '@/components/common/input/Input';

vi.mock('formik', () => ({
  useField: vi.fn(),
}));

const inputProps = {
  label: 'Nom',
  name: 'lastname',
  type: 'text',
};

describe('Input Component', () => {
  it('should renders the component correctly', () => {
    // Set up the mock for useField
    (useField as jest.Mock).mockReturnValue([
      {
        value: '',
        onChange: vi.fn(),
      },
      {
        touched: true,
        error: '',
      },
    ]);

    render(<Input {...inputProps} />);

    const label = screen.getByLabelText(/nom/i);
    const input = screen.getByRole('textbox');

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('should renders an error message if touched === true and error is set', () => {
    // Set up the mock for useField to return an error
    (useField as jest.Mock).mockReturnValue([
      {
        value: '',
        onChange: vi.fn(),
      },
      {
        touched: true,
        error: 'Enter a valid value',
      },
    ]);

    render(<Input {...inputProps} />);

    const errorMessage = screen.getByText(/enter a valid value/i);

    expect(errorMessage).toBeInTheDocument();
  });
});
