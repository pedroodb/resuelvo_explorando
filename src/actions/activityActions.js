import { ACTIVITY_SET } from "../constants";

export function setConfiguration(configuration) {
  return {
    type: ACTIVITY_SET,
    payload: configuration,
  }
}

export default {
  setConfiguration
}