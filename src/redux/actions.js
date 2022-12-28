export const actionFabric =
  (type = '') =>
  payload => ({ type, payload });
