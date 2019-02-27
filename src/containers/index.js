import WelcomeScreenComponent from './WelcomeScreen'
import MainScreenComponent from './MainScreen'
import ActivityPickerModalComponent from './ActivityPickerModal'
import TaskScreenComponent from './TaskScreen'
import NewActivityModalComponent from './NewActivityModal'
import CameraModalComponent from './CameraModal'
import TaskReviewScreenComponent from './TaskReviewScreen'
import FinalReviewScreenComponent from './FinalReviewScreen'

export const ActivityPickerModal = ActivityPickerModalComponent
export const NewActivityModal = NewActivityModalComponent
export const WelcomeScreen = WelcomeScreenComponent
export const MainScreen = MainScreenComponent
export const TaskScreen = TaskScreenComponent
export const CameraModal = CameraModalComponent
export const TaskReviewScreen = TaskReviewScreenComponent
export const FinalReviewScreen = FinalReviewScreenComponent

export default { WelcomeScreen, MainScreen, ActivityPickerModal, NewConfigurationModal: NewActivityModal, TaskScreen, CameraModal, TaskReviewScreen, FinalReviewScreen }
