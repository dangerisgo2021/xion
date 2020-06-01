export const setKeyToPayloadKeyValue = ({
  key,
  payloadKey = null,
  defaultValue = undefined,
}) => (state, action) => ({
  ...state,
  [key]: action?.payload?.[payloadKey || key] ?? defaultValue,
});
