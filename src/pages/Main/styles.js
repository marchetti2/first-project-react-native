import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Card = styled.TouchableOpacity`
  background: #fff;
  width: 100%;
  height: 120px;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #eee;

  flex-direction: row;
  align-items: center;
`;

export const View = styled.View`
  width: 80%;
`;

export const CardTitle = styled.Text`
  color: #333;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;

export const CardText = styled.Text`
  color: #666;
  font-size: 14px;
  text-align: center;
  margin: 10px 15px 0 15px;
`;

export const Title = styled.Text`
  text-align: center;
  color: #333;
  font-size: 24px;
  font-weight: bold;
`;

export const Text = styled.Text`
  text-align: center;
  margin: 10px 0 20px 0;
  font-size: 15px;
  color: #666;
  line-height: 21px;
`;

export const Iconn = styled(Icon)`
  border: 1px solid #eee;
  border-radius: 32px;
`;
