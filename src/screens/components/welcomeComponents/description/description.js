import React, {Component} from 'react'
import { Text } from 'react-native'
import descriptionStyle from './descriptionStyle'

class Description extends Component {
  render() {
    return (
      <Text style={descriptionStyle.descriptionWS}>
        {this.props.description}
      </Text>
    )
  }
}

export default Description