import React, { Component } from 'react'
import { View, Text,asset } from 'react-360'
import Panel from './Panel'
export default class Container extends Component {
  state = {
    boxes: {}
  }

  handleEnter = (id) => {
    this.setState({
      boxes: {
        ...this.state.boxes,
        [id]: true
      }
    })
  }
  handleExit = (id) => {
    this.setState({
      boxes: {
        ...this.state.boxes,
        [id]: false
      }
    })
  }
  render() {
    const { boxes } = this.state
    return (
      <View>
        <Panel />
      </View>
    )
  }
}
