import React, { Component } from 'react'
import { Text, asset, View,Environment } from 'react-360'
import { Panel, Image } from '../Styled';
import { connect } from 'react-redux'

class index extends Component {
  state = {
    hovered: false,
  }
  
  handleEnter = () => {
    this.setState({hovered: true})
  }

  handleExit = () => {
    this.setState({hovered: false})
  }
  
  render() {
    const { hovered } = this.state
    const { selectedPlace } = this.props
    const {title, img} = selectedPlace;
    return (
        <Panel hitSlop={1} hovered={hovered} onEnter={this.handleEnter} onExit={this.handleExit} onInput={this.handleInput}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold', fontFamily: 'Roboto', transform: [{rotateZ: '0deg'}]}}>{title}</Text>
          <Image source={asset(img)} />
        </Panel>
    )
  }
}
const mapStateToProps = store => ({
  selectedPlace: store.selectedPlace,
})

export default connect(mapStateToProps)(index)