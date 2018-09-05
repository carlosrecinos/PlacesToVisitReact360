import styled from "styled-components";
import { View,Text } from 'react-360';

export const SelectorContainer = styled(View)`
  width: 1000px;
  height: 450px;
  padding: 50px;
  padding-top: 0px;
  background-color: #EEE;
  opacity: 0.9;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  border-radius: 3px;
  border: 2px solid gray;
`

export const Card = styled(View)`
  background-color: white;
  width: 200;
  height: 300;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0.9;
  border: 2px solid gray;
  border-radius: 2px;
  margin-bottom: 10px;
  z-index: 1;
  ${({hovered}) => hovered &&
  `transform: scale(1.1);
    z-index: 200;
  `
  }
`

export const CardText = styled(Text)`
  font-size: ${({title}) => title ? '20' : '12'};
  color: black;
  text-align: center;
  margin-bottom: 10px;
`