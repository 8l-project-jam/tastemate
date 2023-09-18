import { render, screen } from '@testing-library/react';
import FilterButton from '../../src/components/FilterButton';
import '@testing-library/jest-dom';

describe(FilterButton, () => {
  it('renders a button with the expected label', () => {
    render(<FilterButton filterLabel="Test Label"/>);

    expect(screen.getByRole('button')).toHaveTextContent('Test Label');
  })
})