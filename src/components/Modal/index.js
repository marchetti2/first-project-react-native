import React from 'react';
import { ScrollView, KeyboardAvoidingView, Platform, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as dispatchActions from '../../store/modules/legislation/actions';

import database from '../../data/database';

import {
  Container,
  Btn,
  BtnText,
  Input,
  Tab,
  Column,
  Row,
  RowTwo,
  RowText,
  RowSubText,
  Form,
  SubmtBtn,
  Cancel,
  ColumnTwo,
} from './styles';

function Modal({ navigation, state, changeState }) {
  const { current, occupation, division, details, area } = state[0];

  function handleAddState(p) {
    changeState(current, p);
    navigation.goBack();
  }
  function handleAddAreaState(text) {
    const d = text;
    changeState(current, d);
  }
  function handleAddChargeState(current, p) {
    changeState(current, p);
  }

  function HandleModalContent() {
    const indexOccupation = database.occupation.indexOf(occupation);

    switch (current) {
      case 'occupation':
        return (
          <ScrollView showsVerticalScrollIndicator={false}>
            {database.occupation.map(p => (
              <Btn key={p} onPress={() => handleAddState(p)}>
                <BtnText>{p}</BtnText>
              </Btn>
            ))}
          </ScrollView>
        );
      case 'division':
        const a = database.division[indexOccupation];
        const b = database.description[indexOccupation];
        const verif = a.map(a => a);

        if (verif.length > 3) {
          return (
            <ScrollView showsVerticalScrollIndicator={false}>
              <Tab>
                <Column>
                  {a.map(p => (
                    <Row key={p} onPress={() => handleAddState(p)}>
                      <RowText>{p}</RowText>
                    </Row>
                  ))}
                </Column>

                <ColumnTwo>
                  {b.map(p => (
                    <RowTwo
                      key={p}
                      onPress={() => handleAddState(a[b.indexOf(p)])}
                    >
                      <RowSubText>{p}</RowSubText>
                    </RowTwo>
                  ))}
                </ColumnTwo>
              </Tab>
            </ScrollView>
          );
        } else {
          return (
            <Tab>
              <Column>
                {a.map(p => (
                  <Row key={p} onPress={() => handleAddState(p)}>
                    <RowText>{p}</RowText>
                  </Row>
                ))}
              </Column>

              <ColumnTwo>
                {b.map(p => (
                  <RowTwo
                    key={p}
                    onPress={() => handleAddState(a[b.indexOf(p)])}
                  >
                    <RowSubText>{p}</RowSubText>
                  </RowTwo>
                ))}
              </ColumnTwo>
            </Tab>
          );
        }
      case 'details':
        const indexDivision = database.division[indexOccupation].indexOf(
          division
        );
        const indexCharge = database.details[indexOccupation][
          indexDivision
        ].indexOf(details);
        const char =
          database.charge[indexOccupation][indexDivision][indexCharge];
        const data = database.details[indexOccupation][indexDivision].map(p => (
          <Btn key={p} onPress={() => handleAddState(p)}>
            <BtnText>
              {p}
              {indexOccupation < 9
                ? handleAddChargeState('charge', char)
                : null}
            </BtnText>
          </Btn>
        ));

        if (data.length > 3) {
          return (
            <ScrollView showsVerticalScrollIndicator={false}>{data}</ScrollView>
          );
        } else {
          return data;
        }
      case 'charge':
        return database.charge[12].map(p => (
          <Btn key={p} onPress={() => handleAddState(p)}>
            <BtnText>{p}MJ/m²</BtnText>
          </Btn>
        ));
      case 'area':
        return (
          <Form>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="0"
              value={area}
              onChangeText={text => handleAddAreaState(text)}
              returnKeyType="send"
              keyboardType="number-pad"
            />
            <SubmtBtn onPress={() => navigation.goBack()}>
              <Icon name="chevron-right" size={20} color="#fff" />
            </SubmtBtn>
          </Form>
        );

      case 'height':
        return database.heigth.map(p => (
          <Btn key={p} onPress={() => handleAddState(p)}>
            <BtnText>{p}</BtnText>
          </Btn>
        ));

      case 'situation':
        return database.situation.map(p => (
          <Btn key={p} onPress={() => handleAddState(p)}>
            <BtnText>{p}</BtnText>
          </Btn>
        ));

      default:
        return null;
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <>
        <Container>{HandleModalContent()}</Container>
        <Cancel>
          <Btn onPress={() => navigation.goBack()}>
            <BtnText>Cancelar</BtnText>
          </Btn>
        </Cancel>
      </>
    </KeyboardAvoidingView>
  );
}

const mapStateToProps = state => ({
  state: state.legislation,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(dispatchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
