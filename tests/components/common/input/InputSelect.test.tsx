import { useField } from 'formik';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { InputSelect } from '@/components/common/input/InputSelect';

vi.mock('formik', () => ({
  useField: vi.fn(),
}));

const MockedComponent: React.FC = () => {
  return (
    <InputSelect name="location">
      <option key="mafate" value="mafate">
        Mafate
      </option>
      <option key="cilaos" value="cilaos">
        Cilaos
      </option>
      <option key="piton-des-neiges" value="piton-des-neiges">
        Piton des neiges
      </option>
    </InputSelect>
  );
};

beforeEach(() => {
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
});

describe('InputSelect Component', () => {
  it('should renders the component correctly', () => {
    render(<MockedComponent />);

    const optionOne = screen.getByText(/mafate/i);
    const optionTwo = screen.getByText(/cilaos/i);
    const optionThree = screen.getByText(/piton des neiges/i);

    expect(optionOne).toBeInTheDocument();
    expect(optionTwo).toBeInTheDocument();
    expect(optionThree).toBeInTheDocument();
  });

  it('should be able to select an option', () => {
    render(<MockedComponent />);

    const optionOne = screen.getByText(/mafate/i);
    fireEvent.change(optionOne, { target: { value: 'mafate' } });

    expect(optionOne).toHaveProperty('selected', true);
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

    render(<MockedComponent />);

    const errorMessage = screen.getByText(/enter a valid value/i);

    expect(errorMessage).toBeInTheDocument();
  });
});
