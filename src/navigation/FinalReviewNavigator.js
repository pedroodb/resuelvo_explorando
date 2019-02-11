import { createStackNavigator } from 'react-navigation'
import { FinalReviewScreen } from '../containers'

//Navegador de pantalla de revision final
const FinalReviewNavigator = createStackNavigator(
  {
    FinalReview: {
      screen: FinalReviewScreen,
    }
  },
  {
    initialRouteName: 'FinalReview',
  }
);

export default FinalReviewNavigator
  