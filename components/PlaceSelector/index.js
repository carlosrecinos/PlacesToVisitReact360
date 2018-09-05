import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, AppRegistry, Text, asset,Environment } from 'react-360'
import { SelectorContainer, Card, CardText } from './Components';
import _ from 'lodash'
import { Image } from '../Styled';
import store from '../../store';
const { places } = store.getState();
class PlaceSelector extends Component {
  state = {
    cards : {}
  }
  handleEnter = (id) => {
    this.setState({
      cards: {
        ...this.state.cards,
        [id]: true
      }
    })
  }

  handleExit = (id) => {
    this.setState({
      cards: {
        ...this.state.cards,
        [id]: false
      }
    })
  }

  handleInput = (e, place) => {
    const inputEvent = e.nativeEvent.inputEvent;
    if (inputEvent.action === 'up' && inputEvent.buttonClass === 'confirm') {
      Environment.setBackgroundImage(asset(place.background))
      store.dispatch({type: 'SET_PLACE', payload: place })
    }
  }
  renderCard = (place) => {
    const {title, background, description, id, img} = place;
    return (
      <Card key={id} onEnter={() => {this.handleEnter(id)}} onExit={() => {this.handleExit(id)}} hovered={!!this.state.cards[id]} onInput={(e) => {this.handleInput(e, place)}}>
        <CardText title>{title}</CardText>
        <View style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
          <Image source={asset(img)} />
        </View>
        <CardText>{description}</CardText>
      </Card>
    )
  }
  render() {
    return (
      <SelectorContainer>
        <Text style={{fontSize: 30, textAlign: 'center', width: '100%', color: 'black', fontWeight: 'bold', marginBottom: 20}}>Where to go?</Text>
        {
          _.map(places, place => this.renderCard(place))
        }
      </SelectorContainer>
    )
  }
}

const mapStateToProps = store => ({
  places: store.places,
})

const mapDispatchToProps = dispatch => ({
  setPlace(place){
    dispatch({type: 'SET_PLACE', place})
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(PlaceSelector);

AppRegistry.registerComponent('PlaceSelector', () => PlaceSelector);
