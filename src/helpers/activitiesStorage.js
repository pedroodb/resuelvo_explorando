import { AsyncStorage } from 'react-native'

async function getActivities() {
  const activities = await AsyncStorage.getItem('activities')
  return (activities == null ? [] : JSON.parse(activities))
}

async function setActivities(activities) {
  await AsyncStorage.setItem('activities', JSON.stringify(activities))
}

async function storeActivity(activity) {
  activities = await getActivities()
  await setActivities([...activities, activity])
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

async function deleteActivity(index) {
  activities = (await getActivities())
  activities.splice(index,1)
  await setActivities(activities)
}

export const getActivitiesFunction = getActivities
export const storeActivityFunction = storeActivity
export const getActiveActivityFunction = getActiveActivity
export const setActiveActivityFunction = setActiveActivity
export const isActivitySetFunction = isActivitySet
export const deleteActivityFunction = deleteActivity

export default { getActivitiesFunction, storeActivityFunction, getActiveActivityFunction, setActiveActivityFunction, isActivitySetFunction }