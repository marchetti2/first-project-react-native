import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import firebase from 'firebase';
import {
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import { auth, initializeApp, storage } from 'firebase';

import firebaseSvc from '../../../FireBaseSvc.js';
import * as dispatchActions from '../../store/modules/legislation/actions';
import {
  Container,
  Title,
  Text,
  Error,
  Form,
  Input,
  Button,
  ButtonText,
  KeyboardDismiss,
  Bottom,
  TextBottom,
  ButtonBottom,
  Content,
  Row,
  Iconn,
  ForgotBottom,
} from './styles';
import api from '../../services/api';

function Login({ navigation, state, stateUser, addData, load }) {
  const { username } = state[0];
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [actv, setActv] = useState(false);
  const [show, setShow] = useState(false);

  async function checkUsersExist() {
    var user = firebase.auth().currentUser;
    await addData(user);
    return user;
  }

  async function signIn() {
    const user = {
      email: username,
      password: password,
    };
    setActv(true);
    Keyboard.dismiss();

    const response = await firebaseSvc.login(
      user,
      loginSuccess,
      loginFailed
    );
  }

  async function loginSuccess() {
    await checkUsersExist();
    load(true);
    navigation.navigate('Init');
    setActv(false);
  }
  function loginFailed() {
    setActv(false);
    load(false);
    setError(true);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}>
      <KeyboardDismiss onPress={() => Keyboard.dismiss()}>
        <Container>
          <Content>
            <Title>Bem Vindo</Title>
            <Text>Para continuar, digite seu usuario e senha.</Text>
            {error && <Error>Usuario inexistente</Error>}
            <Form>
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                placeholder="Digite seu usuario"
                value={username}
                onChangeText={(user) => stateUser(user)}
              />
              <Row>
                <Input
                  autoCapitalize="none"
                  autoCorrect={false}
                  underlineColorAndroid="transparent"
                  placeholder="Digite sua senha"
                  onChangeText={(user) => setPassword(user)}
                  secureTextEntry={show ? false : true}
                />
                {show ? (
                  <Iconn
                    onPress={() => setShow(false)}
                    name="visibility-off"
                    size={25}
                    color="#ccc"
                  />
                ) : (
                  <Iconn
                    onPress={() => setShow(true)}
                    name="visibility"
                    size={25}
                    color="#ccc"
                  />
                )}
              </Row>
              <ForgotBottom>
                <TouchableOpacity onPress={()=>navigation.navigate('Forgot')}>
                  <TextBottom>Esqueceu a senha?</TextBottom>
                </TouchableOpacity>
              </ForgotBottom>
              <Button onPress={signIn}>
                {actv ? (
                  <ActivityIndicator size="small" color="#FFF" />
                ) : (
                  <ButtonText>Prosseguir</ButtonText>
                )}
              </Button>
            </Form>
          </Content>

          <Bottom>
            <TextBottom>Não tem uma conta?</TextBottom>
            <ButtonBottom onPress={()=>navigation.navigate('Create')}>
              <TextBottom style={{ color: '#7A91CA', fontSize: 16 }}>
                Crie aqui!
              </TextBottom>
            </ButtonBottom>
          </Bottom>
        </Container>  
      </KeyboardDismiss>
    </KeyboardAvoidingView>
  );
}

const mapStateToProps = (state) => ({
  state: state.legislation,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(dispatchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
