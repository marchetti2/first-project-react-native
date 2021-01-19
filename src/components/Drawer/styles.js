import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin: auto 0;
`;
export const Image = styled.Image`
  margin-top: 40px;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  border-color: #ccc;
  border-width: 1px;
`;
export const Iconn = styled(Icon)``;

export const Name = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  text-transform: capitalize;
`;
export const SubName = styled.Text`
  color: #ccc;
  font-size: 13px;
  text-align: center;
  margin-top: 5px;
`;
export const Border = styled.View`
  border-width: 0.5px;
  border-color: #ccc;
  margin: 30px 0;
  width: 80%;
`;
export const PagesContainer = styled.View`
  width: 100%;
`;

export const Text = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #eee;
  line-height: 21px;
  margin-bottom: 50px;
`;

export const Error = styled.Text`
  text-align: center;
  color: #e37a7a;
  margin-bottom: 7px;
`;
