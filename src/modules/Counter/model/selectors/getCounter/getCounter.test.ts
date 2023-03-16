import { getCounter } from './getCounter';

describe('getCounter', () => {
  it('should return counter', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 0,
      }
    };

    expect(getCounter(state as StateSchema)).toEqual({
      value: 0,
    });
  });
});
