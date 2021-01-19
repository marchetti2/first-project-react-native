import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as dispatchActions from '../../store/modules/legislation/actions';

import {
  Container,
  Card,
  CardTitle,
  CardText,
  Title,
  Text,
  Iconn,
  View,
} from './styles';

function Main({ navigation, state }) {
  const { username, response } = state[0];
  const time = new Date();
  const hours = time.getHours();

  function DateFormat() {
    if (hours >= 6 && hours < 12) {
      return <Title>Bom dia,</Title>;
    } else if (hours >= 12 && hours < 18) {
      return <Title>Boa tarde,</Title>;
    } else {
      return <Title>Boa noite,</Title>;
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <Title>
          <DateFormat />
          {` ${response.displayName}`}
        </Title>
        <Text>Selecione abaixo a opção desejada.</Text>

        <Card onPress={() => navigation.navigate('Rest')}>
          <Iconn name="verified-user" size={64} color="#ff6666" />
          <View>
            <CardTitle>Verificador de medidas de segurança</CardTitle>
            <CardText>
              Verifique as medidas de segurança contra incendio para a
              edificaçao
            </CardText>
          </View>
        </Card>

        <Card onPress={() => {}}>
          <Iconn name="assignment" size={64} color="#627beb" />
          <View>
            <CardTitle>Instruçoes técnicas</CardTitle>
            <CardText>Consulte a legislaçao do CBMMG</CardText>
          </View>
        </Card>

        <Card onPress={() => {}}>
          <Iconn name="iso" size={64} color="#73c5ff" />
          <View>
            <CardTitle>Calculo de carga de incendio</CardTitle>
            <CardText>Calcule a carga de incendio da edificaçao.</CardText>
          </View>
        </Card>
        <Card onPress={() => {}}>
          <Iconn name="insert-invitation" size={64} color="#a4d68e" />
          <View>
            <CardTitle>novo</CardTitle>
            <CardText>novo</CardText>
          </View>
        </Card>
      </Container>
    </ScrollView>
  );
}

const mapStateToProps = state => ({
  state: state.legislation,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(dispatchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
