import React from 'react';
import { connect } from 'react-redux';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { bindActionCreators } from 'redux';
import firebase from 'firebase';

import * as dispatchActions from '../../store/modules/legislation/actions';
import {
  Container,
  Image,
  Iconn,
  Name,
  SubName,
  PagesContainer,
  Border,
} from './styles';

function CustomDrawerContent({ props, state, navigation, load }) {
  const { response } = state[0];

  function exit() {
    firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
    load(false);
    navigation.closeDrawer();
    navigation.navigate('Login');
  }

  return (
    <DrawerContentScrollView {...props}>
      <Container>
        <Image
          source={{
            uri: 'https://gravatar.com/avatar/4c79f6be08609a4416de2638d5e76d0f?s=200&d=mp&r=x'
          }}
        />
        <Name>{response.displayName}</Name>
        <SubName>{response.email}</SubName>

        <Border />

        <PagesContainer>
          <DrawerItem
            label="Medidas de segurança"
            icon={() => <Iconn color="#ccc" size={25} name="verified-user" />}
            labelStyle={{ color: '#fff' }}
            onPress={() => {
              navigation.closeDrawer();
              navigation.navigate('Rest', { screen: 'SecurityMeasures' });
            }}
          />
          <DrawerItem
            label="Legislação"
            icon={() => <Iconn color="#ccc" size={25} name="assignment" />}
            labelStyle={{ color: '#fff' }}
            onPress={() => {
              /*navigation.navigate('Rest', { screen: 'TableResult' });*/
            }}
          />
          <DrawerItem
            label="Calculo de Carga de Incendio"
            icon={() => <Iconn color="#ccc" size={25} name="iso" />}
            labelStyle={{ color: '#fff' }}
            onPress={() => {
              /*navigation.navigate('Rest',{screen:'SecurityMeasures'});*/
            }}
          />
        </PagesContainer>
        <Border />
        <PagesContainer>
          <DrawerItem
            label="Configurações"
            icon={() => <Iconn color="#ccc" size={25} name="directions-run" />}
            labelStyle={{ color: '#fff' }}
            onPress={() => {
              /*navigation.navigate('Rest',{screen:'SecurityMeasures'});*/
            }}
          />
          <DrawerItem
            label="Sair"
            icon={() => <Iconn color="#ccc" size={25} name="directions-run" />}
            labelStyle={{ color: '#fff' }}
            onPress={() => {
              exit();
            }}
          />
        </PagesContainer>
      </Container>
    </DrawerContentScrollView>
  );
}

const mapStateToProps = state => ({
  state: state.legislation,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(dispatchActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomDrawerContent);
