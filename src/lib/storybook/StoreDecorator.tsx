import { Story } from '@storybook/react';

import { StoreProvider } from 'store';

export const StoreDecorator = (initialState?: DeepPartial<StateSchema>) => (Story: Story) => {
  return (
    <StoreProvider initialState={initialState}>
      <Story/>
    </StoreProvider>
  );
};
