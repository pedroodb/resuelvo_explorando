import { CONFIGURATION_SET } from "../constants";

export function setConfiguration(configuration) {
  return {
    type: CONFIGURATION_SET,
    payload: configuration,
  }
}

export default {
  setConfiguration
}