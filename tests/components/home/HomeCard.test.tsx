import { HomeCard } from '@/components/home/HomeCard';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('HomeCard Component', () => {
  it('should renders the component correctly', () => {
    render(
      <HomeCard
        title="Mon titre"
        content="Un peu de contenu"
        imgSrc="image.jpg"
      />
    );

    const title = screen.getByRole('heading', { name: /mon titre/i });
    const content = screen.getByText(/un peu de contenu/i);
    const image = screen.getByRole('img');

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
