import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const KeyboardDismiss = styled.TouchableWithoutFeedback``;

export const Content = styled.View`
  margin: auto;
`;

export const Container = styled.View`
  background: #f5f5f5;
  flex: 1;
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 40px 40px 25px 40px;
`;

export const Title = styled.Text`
  text-align: center;
  color: #333;
  font-size: 28px;
  font-weight: bold;
  margin: 20px 0 10px 0;
`;

export const Text = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #333;
  line-height: 21px;
  margin-bottom: 20px;
`;

export const Error = styled.Text`
  text-align: center;
  color: #e37a7a;
  margin-bottom: 7px;
`;

export const Form = styled.View`
  margin: 10px 0 15px 0;
`;

export const Input = styled.TextInput`
  background: #fff;
  border-radius: 4px;
  height: 45px;
  padding: 0 20px;
  width: 100%;
    border: 1px solid #999;
    padding: 10px;
  margin-top: 10px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 10px 0;
  /*background: #fff;*/
  border-radius: 4px;

`;

export const Iconn = styled(Icon)`
  margin: auto 15px auto auto;
`;

export const Button = styled.TouchableOpacity`
  background: #7a91ca;
  border-radius: 4px;
  height: 45px;
  margin: 25px 0 25px 0;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
`;

export const Bottom = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto auto 0 auto;
  padding-top: 20px;
`;

export const ButtonBottom = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const TextBottom = styled.Text`
  text-align: center;
  font-size: 14px;
  color: #eee;
  line-height: 21px;
`;
export const ForgotBottom = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;
