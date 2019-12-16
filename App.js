import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { createAppContainer } from 'react-navigation'

import AppReducer from './src/reducers'
import RootNavigator from './src/navigation/RootNavigator'

const AppContainer = createAppContainer(RootNavigator) 

export default class App extends React.Component {
  
  store = createStore(AppReducer)

  render() {
    return (
      <Provider store={this.store}>
        <AppContainer/>
      </Provider>
    )
  }
}