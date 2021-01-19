import styled, { css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Iconn = styled(Icon)`
  padding-right: 12px;
  ${props =>
    props.collapse &&
    props.item === props.clickedITem &&
    css`
      transform: rotate(180deg);
      padding-right: 0;
      padding-left: 12px;
    `}
`;

export const SubText = styled.Text`
  font-size: 13px;
  color: #666;
  text-align: center;
  margin-bottom: 10px;
`;

export const Border = styled.View`
  border: 1px solid #fff;
  padding: 20px 20px 10px 20px;
`;
