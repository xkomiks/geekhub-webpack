import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from './Counter';
import { componentRender } from 'lib/componentRender';

describe('Counter', () => {
  it('should render', async () => {
    componentRender(<Counter/>, {
      initialState: { counter: { value: 10 } }
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  it('should increment', async () => {
    componentRender(<Counter/>, {
      initialState: { counter: { value: 10 } }
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    await userEvent.click(screen.getByTestId('increment-button'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  it('should decrement', async () => {
    componentRender(<Counter/>, {
      initialState: { counter: { value: 10 } }
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    await userEvent.click(screen.getByTestId('decrement-button'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
