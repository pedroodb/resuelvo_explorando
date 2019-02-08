import { createStackNavigator } from 'react-navigation'
import { ReviewScreen } from '../containers'

//Navegador de pantalla de correcciones
const ReviewNavigator = createStackNavigator(
  {
    Review: {
      screen: ReviewScreen,
      navigationOptions: () => ({
        headerLeft: null,
      }),
    }
  },
  {
    initialRouteName: 'Review',
  }
);

export default ReviewNavigator
  