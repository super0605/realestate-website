// Utils for the unit testing
export const setHookState = (newState) =>
  jest.fn().mockImplementation((state) => [newState, (newState) => {}]);
