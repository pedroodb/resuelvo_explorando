export function setConfiguration(configuration) {
  return {
    type: 'configuration-set',
    payload: configuration,
  }
}

export default {
  setConfiguration
}