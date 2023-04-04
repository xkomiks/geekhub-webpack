import { Button } from './Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  it('should be defined', () => {
    expect(Button).toBeDefined();
  });

  it('should render', () => {
    render(<Button>test</Button>);
    expect(screen.getByRole('button', { name: /test/i })).toBeInTheDocument();
    screen.debug();
  });
});
