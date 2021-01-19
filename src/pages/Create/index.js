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
  StatusBar,
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

function Create({ navigation, state, stateUser, addData, load }) {
  const { username } = state[0];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [actv, setActv] = useState(false);

  async function signIn() {
    const user = {
      name: name,
      email: email,
      password: password,
    };
    Keyboard.dismiss();

    await firebaseSvc.createAccount(user, loginSuccess);
  }

  function loginSuccess() {
    var user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name,
      }).then(function () {
        navigation.navigate('Login');
      })
      .catch(function (error) {
        alert(error);
      });
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <KeyboardDismiss onPress={() => Keyboard.dismiss()}>
        <Container>
          <Content>
            <Text>Crie seu usuario e senha.</Text>
            <Form>
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                placeholder="Name"
                value={name}
                onChangeText={(user) => setName(user)}
              />
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                placeholder="Email"
                value={email}
                onChangeText={(user) => setEmail(user)}
              />
              <Row>
                <Input
                  autoCapitalize="none"
                  autoCorrect={false}
                  underlineColorAndroid="transparent"
                  placeholder="Senha"
                  //value={text=> text}
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
              <Button onPress={signIn}>
                {actv ? (
                  <ActivityIndicator size="small" color="#FFF" />
                ) : (
                  <ButtonText>Criar</ButtonText>
                )}
              </Button>
            </Form>
          </Content>
          <Bottom>
            <ButtonBottom onPress={() => navigation.navigate('Login')}>
              <TextBottom style={{ color: '#7A91CA', fontSize: 16 }}>
                Voltar
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

export default connect(mapStateToProps, mapDispatchToProps)(Create);
