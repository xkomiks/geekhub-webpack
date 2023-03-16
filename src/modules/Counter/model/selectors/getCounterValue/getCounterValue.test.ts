import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  it('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 1,
      }
    }

    expect(getCounterValue(state as StateSchema)).toEqual(1);
  });
});
