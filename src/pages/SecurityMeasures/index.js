import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, ScrollView, Alert } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as dispatchActions from '../../store/modules/legislation/actions';

import {
  Container,
  Row,
  Title,
  SubTitle,
  CardInput,
  CardText,
  SubmitBtn,
  BtnText,
  Iconn,
  CardDiv,
} from './styles';

function SecurityMeasures({ navigation, state, modelCurrent, changeState }) {
  const [loading, setLoading] = useState(false);
  const {
    occupation,
    division,
    details,
    charge,
    area,
    height,
    situation,
  } = state[0];

  function currentModel(current: string) {
    modelCurrent(current);
    navigation.navigate('MyModal');
  }

  function submit() {
    if (
      occupation &&
      division &&
      details &&
      charge &&
      area &&
      height &&
      situation
    ) {
      setLoading(true);
      navigation.navigate('TableResult');
      setLoading(false);
    } else {
      Alert.alert('Preencha todos os campos');
    }
  }

  useEffect(() => {
    changeState('division', '');
  },[occupation]);

  useEffect(() => {
    changeState('details', '');
  }, [division]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <Row>
          <Iconn name="verified-user" size={70} color="#ff6666" />
          <Title>Definir medidas de segurança</Title>
        </Row>
        <SubTitle>
          Preencha os campos para verificar as medidas de segurança necessárias
          para a edificaçao
        </SubTitle>

        <CardInput onPress={() => currentModel('occupation')}>
          <CardDiv style={styles.container}>
            <CardText>
              {!occupation ? 'Selecione a ocupação' : occupation}
            </CardText>
          </CardDiv>
        </CardInput>

        <CardInput onPress={occupation ? () => currentModel('division') : null}>
          <CardDiv
            style={styles.container}
            verif={occupation ? 'active' : 'blocked'}
          >
            <CardText>{!division ? 'Selecione a divisão' : division}</CardText>
          </CardDiv>
        </CardInput>

        <CardInput onPress={division ? () => currentModel('details') : null}>
          <CardDiv
            style={styles.container}
            verif={division ? 'active' : 'blocked'}
          >
            <CardText>{!details ? 'Selecione a descrição' : details}</CardText>
          </CardDiv>
        </CardInput>

        <CardInput onPress={details ? () => currentModel('charge') : null}>
          <CardDiv
            style={styles.container}
            verif={details ? 'active' : 'blocked'}
          >
            <CardText>
              {!charge ? 'Selecione a carga de incêndio' : `${charge} MJ/m²`}
            </CardText>
          </CardDiv>
        </CardInput>

        <CardInput onPress={charge ? () => currentModel('area') : null}>
          <CardDiv
            style={styles.container}
            verif={charge ? 'active' : 'blocked'}
          >
            <CardText>{!area ? 'Selecione a área' : area}</CardText>
          </CardDiv>
        </CardInput>

        <CardInput onPress={area ? () => currentModel('height') : null}>
          <CardDiv style={styles.container} verif={area ? 'active' : 'blocked'}>
            <CardText>{!height ? 'Selecione a altura' : height}</CardText>
          </CardDiv>
        </CardInput>

        <CardInput onPress={height ? () => currentModel('situation') : null}>
          <CardDiv
            style={styles.container}
            verif={height ? 'active' : 'blocked'}
          >
            <CardText>
              {!situation ? 'Selecione a situação' : situation}
            </CardText>
          </CardDiv>
        </CardInput>

        <SubmitBtn loading={loading} onPress={() => submit()}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <BtnText>Enviar</BtnText>
          )}
        </SubmitBtn>
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 1.5,
  },
});

const mapStateToProps = state => ({
  state: state.legislation,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(dispatchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SecurityMeasures);
