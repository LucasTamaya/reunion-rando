import { render, screen } from '@testing-library/react';
import { useField } from 'formik';
import { describe, it, expect } from 'vitest';

import { TextArea } from '@/components/common/input/TextArea';

vi.mock('formik', () => ({
  useField: vi.fn(),
}));

const textAreaProps: { label: string; name: string } = {
  label: 'Description',
  name: 'description',
};

describe('TextArea Component', () => {
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

    render(<TextArea {...textAreaProps} />);

    const label = screen.getByLabelText(/description/i);
    const textarea = screen.getByRole('textbox');

    expect(label).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
  });
});

it('should renders an error message if touched === true and error is set', () => {
  // Set up the mock for useField to return an error message
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

  render(<TextArea {...textAreaProps} />);

  const errorMessage = screen.getByText(/enter a valid value/i);

  expect(errorMessage).toBeInTheDocument();
});
