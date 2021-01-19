import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: stretch;
  justify-content: center;
  padding: 30px;
`;

export const Div = styled.View`
  border: 1px solid #eee;
`;
export const DivTwo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  height: 60px;
`;
export const DivTree = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  max-height: auto;
`;

export const TextTwo = styled.Text`
  display: flex;
  flex: 1;
  border-radius: 1px;
  font-size: 15px;
  color: #333;
  text-align: left;
  align-items: center;
  background: #fff;
  padding: 10px 35px;
`;

export const POne = styled.View``;

export const Text = styled.Text.attrs({
  numberOfLines: 2,
})`
  display: flex;
  flex: 1;
  border-radius: 1px;
  font-size: 15px;
  color: #333;
  text-align: center;
  align-items: center;
  background: #fff;
  padding: 10px 35px;
`;

export const SubText = styled.Text`
  font-size: 13px;
  color: #666;
  text-align: center;
  border: 1px solid #fff;
  padding: 20px;
`;

export const FlatListt = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
