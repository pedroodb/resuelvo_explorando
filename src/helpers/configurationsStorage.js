import { AsyncStorage } from 'react-native'

async function getActivities() {
  const activities = await AsyncStorage.getItem('activities')
  return (activities == null ? [] : JSON.parse(activities))
}

async function storeActivity(activity) {
  activities = await getActivities()
  await AsyncStorage.setItem('activities', JSON.stringify([...activities, activity]))
}

async function getActiveActivity() {
  return JSON.parse(await AsyncStorage.getItem('activeActivity'))
}

async function setActiveActivity(activity) {
  await AsyncStorage.setItem('activeActivity', JSON.stringify(activity))
}

async function isActivitySet() {
  return (await getActiveActivity() !== null)
}

export const getActivitiesFunction = getActivities
export const storeActivityFunction = storeActivity
export const getActiveActivityFunction = getActiveActivity
export const setActiveActivityFunction = setActiveActivity
export const isActivitySetFunction = isActivitySet

export default { getActivitiesFunction, storeActivityFunction, getActiveActivityFunction, setActiveActivityFunction, isActivitySetFunction }