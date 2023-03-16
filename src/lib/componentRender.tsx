import { render } from '@testing-library/react';
import { ReactNode } from 'react';

import { StoreProvider } from 'store';

interface IComponentRenderOptions {
  initialState?: DeepPartial<StateSchema>;
}

export function componentRender(component: ReactNode, options: IComponentRenderOptions = {}) {
  const { initialState } = options;

  return render(
    <StoreProvider initialState={initialState}>
      {component}
    </StoreProvider>
  );
}
