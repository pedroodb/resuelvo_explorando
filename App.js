import React from 'react'
import AppContainer from './src/AppContainer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import AppReducer from './src/reducers'

export default class App extends React.Component {
  
  store = createStore(AppReducer)

  render() {
    return (
      <Provider store={this.store}>
        <AppContainer />
      </Provider>
    )
  }
}