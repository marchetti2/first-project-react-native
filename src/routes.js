import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import api from './services/api';

import * as dispatchActions from './store/modules/legislation/actions';

import Login from './pages/Login';
import Create from './pages/Create';
import Forgot from './pages/ForgotPass';
import Main from './pages/Main';
import SecurityMeasures from './pages/SecurityMeasures';
import TableResult from './pages/TableResult';
import Modal from './components/Modal';
import CustomDrawerContent from './components/Drawer';
import * as funcs from './animated/funcs';

const LoginStack = createStackNavigator();
const CreateStack = createStackNavigator();
const ForgotStack = createStackNavigator();
const NestingNav = createStackNavigator();
const DrawerStack = createDrawerNavigator();
const MainStack = createStackNavigator();
const RestStack = createStackNavigator();
const RootStack = createStackNavigator();

function LoginStackScreen() {
  return (
    <LoginStack.Navigator headerMode="none">
      <LoginStack.Screen
        name="Login"
        component={Login}
        options={{
          cardOverlayEnabled: true,
        }}
      />
    </LoginStack.Navigator>
  );
}

function CreateStackScreen() {
  return (
    <CreateStack.Navigator headerMode="none">
      <CreateStack.Screen
        name="Create"
        component={Create}
        options={{
          cardOverlayEnabled: true,
        }}
      />
    </CreateStack.Navigator>
  );
}

function ForgotStackScreen() {
  return (
    <ForgotStack.Navigator headerMode="none">
      <ForgotStack.Screen
        name="Forgot"
        component={Forgot}
        options={{
          cardOverlayEnabled: true,
        }}
      />
    </ForgotStack.Navigator>
  );
}

function DrawerScreen() {
  return (
    <DrawerStack.Navigator
      drawerType="front"
      drawerStyle={{
        backgroundColor: '#444A5A',
      }}
      drawerContentOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#fff',
        itemStyle: { marginVertical: 30 },
        activeBackgroundColor: '#444A5A',
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <DrawerStack.Screen name="Home" component={NestingScreen} />
    </DrawerStack.Navigator>
  );
}

function NestingScreen({ navigation }) {
  return (
    <NestingNav.Navigator>
      <NestingNav.Screen
        name="entrada"
        component={Main}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#444A5A',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          gestureEnabled: false,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon name="menu" size={30} color="#FFF" />
            </TouchableOpacity>
          ),
          headerRightContainerStyle: {
            marginRight: 10,
          },
        }}
      />
    </NestingNav.Navigator>
  );
}

function MainStackScreen() {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name="Main" component={DrawerScreen} />
    </MainStack.Navigator>
  );
}

function RestStackScreen({ navigation }) {
  return (
    <RestStack.Navigator>
      <RestStack.Screen
        name="SecurityMeasures"
        component={SecurityMeasures}
        options={{
          title: 'Medidas de segurança',
          headerStyle: {
            backgroundColor: '#444A5A',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
              <Icon name="arrow-back" size={30} color="#FFF" />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            marginLeft: 7,
          },
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: 25,
          },
          gestureDirection: 'horizontal',
          transitionSpec: {
            open: funcs.TransitionIOSSpec,
            close: funcs.TransitionIOSSpec,
          },
          cardStyleInterpolator: funcs.forHorizontalIOS,
        }}
      />
      <RestStack.Screen
        name="TableResult"
        component={TableResult}
        options={{
          title: 'Medidas de segurança',
          headerStyle: {
            backgroundColor: '#444A5A',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('SecurityMeasures')}>
              <Icon name="arrow-back" size={30} color="#FFF" />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            marginLeft: 7,
          },
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: 25,
          },
          gestureDirection: 'horizontal',
          transitionSpec: {
            open: funcs.TransitionIOSSpec,
            close: funcs.TransitionIOSSpec,
          },
          cardStyleInterpolator: funcs.forHorizontalIOS,
        }}
      />
    </RestStack.Navigator>
  );
}

function Routes({ state, load, stateUser, addData }) {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          cardOverlayEnabled: true,
          cardStyle: {
            backgroundColor: 'transparent',
          },
        }}
        mode="modal"
        headerMode="none">

        <RootStack.Screen
          name="Login"
          component={LoginStackScreen}
          options={{
            gestureDirection: 'horizontal-inverted',
            transitionSpec: {
              open: funcs.TransitionIOSSpec,
              close: funcs.TransitionIOSSpec,
            },
            cardStyleInterpolator: funcs.forHorizontalIOS,
          }}
        />

        <RootStack.Screen
          name="Create"
          component={CreateStackScreen}
          options={{
            gestureDirection: 'horizontal-inverted',
            transitionSpec: {
              open: funcs.TransitionIOSSpec,
              close: funcs.TransitionIOSSpec,
            },
            cardStyleInterpolator: funcs.forHorizontalIOS,
          }}
        />

        <RootStack.Screen
          name="Forgot"
          component={ForgotStackScreen}
          options={{
            gestureDirection: 'horizontal-inverted',
            transitionSpec: {
              open: funcs.TransitionIOSSpec,
              close: funcs.TransitionIOSSpec,
            },
            cardStyleInterpolator: funcs.forHorizontalIOS,
          }}
        />

        <RootStack.Screen
          name="Init"
          component={MainStackScreen}
          options={{
            gestureEnabled: false,
            gestureDirection: 'horizontal',
            transitionSpec: {
              open: funcs.TransitionIOSSpec,
              close: funcs.TransitionIOSSpec,
            },
            cardStyleInterpolator: funcs.forHorizontalIOS,
          }}
        />
        <RootStack.Screen
          name="Rest"
          component={RestStackScreen}
          options={{
            gestureDirection: 'horizontal',
            transitionSpec: {
              open: funcs.TransitionIOSSpec,
              close: funcs.TransitionIOSSpec,
            },
            cardStyleInterpolator: funcs.forHorizontalIOS,
          }}
        />
        <RootStack.Screen
          name="MyModal"
          component={Modal}
          options={{
            gestureEnabled: true,
            gestureResponseDistance: {
              vertical: 480,
            },
            gestureDirection: 'vertical',
            transitionSpec: {
              open: funcs.TransitionIOSSpec,
              close: funcs.TransitionIOSSpec,
            },
            cardStyleInterpolator: funcs.forVerticalIOS,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => ({
  state: state.legislation,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(dispatchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
