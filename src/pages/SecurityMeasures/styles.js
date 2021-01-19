import styled, { css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';

export const Iconn = styled(Icon)``;

const handle = {
  active: css`
    opacity: 1;
  `,

  blocked: css`
    opacity: 0.4;
  `,
};

export const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
export const Row = styled.View`
  flex-direction: row;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  color: #333;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  max-width: 70%;
`;

export const SubTitle = styled.Text`
  color: #666;
  font-size: 15px;
  margin: 10px 10px 30px 10px;
  text-align: center;
`;

export const CardInput = styled.TouchableOpacity`
  height: 50px;
  width: 85%;
  border-radius: 5px;
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardDiv = styled.View`
  background: #fff;
  height: 50px;
  width: 100%;
  padding: 0 15px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  ${props => handle[props.verif]}
`;

export const CardText = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: #666;
  font-size: 15px;
`;

export const SubmitBtn = styled(RectButton)`
  background: #7a91ca;
  height: 50px;
  width: 85%;
  padding: 0 15px;
  border-radius: 4px;
  border: none;
  margin: 15px 0;
  opacity: ${props => (props.loading ? 0.7 : 1)};

  align-items: center;
  justify-content: center;
`;

export const BtnText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;
