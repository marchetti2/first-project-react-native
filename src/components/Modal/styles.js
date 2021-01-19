import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: stretch;
  justify-content: center;

  width: 90%;
  max-height: 225px;
  margin: auto auto 5px auto;
  background: #fff;
  border-radius: 10px;
  padding-top: 20px;
`;
export const Cancel = styled.View`
  display: flex;
  align-items: stretch;
  justify-content: center;
  margin: 0 auto 10px auto;
  width: 90%;

  background: #fff;
  border-radius: 10px;
`;

export const Btn = styled.TouchableOpacity`
  padding: 15px 0;
  margin: 0 30px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;
export const BtnText = styled.Text`
  color: #333;
  font-size: 16px;
  text-align: center;
`;

export const Form = styled.View`
  flex-direction: row;
  margin: 0 15px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 5px;
  padding: 0 15px;
`;

export const SubmtBtn = styled(RectButton)`
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #444a5a;
  padding: 0 12px;
  margin-left: 10px;
`;

export const Tab = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
export const Column = styled.View`
  flex: 1;
  flex-direction: column;
  max-width: 80px;
  margin-left: 30px;
`;
export const ColumnTwo = styled.View`
  flex: 1;
  flex-direction: column;
  margin-right: 30px;
`;
export const Row = styled.TouchableOpacity`
  padding: 10px 0;
  height: 58px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;

  align-items: center;
  justify-content: center;
`;
export const RowTwo = styled.TouchableOpacity`
  padding: 10px 0;
  height: 58px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;

  align-items: center;
  justify-content: center;
`;
export const RowText = styled.Text`
  color: #333;
  font-size: 16px;
  text-align: center;
`;
export const RowSubText = styled.Text.attrs({
  numberOfLines: 3,
})`
  padding: 0 10px;
  color: #999;
  font-size: 13px;
  text-align: center;
`;
