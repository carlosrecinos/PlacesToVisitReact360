import { View, Image as RImage } from 'react-360'
import styled from 'styled-components';
export const Panel = styled(View)`
  width: 100%;
  height: 100%;
  padding: 50px;
  ${({hovered}) => hovered && 'transform: scale(1.4)'}
`
export const Image = styled(RImage)`
  height: 100;
  width: 100;
`