import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DataTable } from 'react-native-paper';

// import { Container } from './styles';
import * as dispatchActions from '../../store/modules/legislation/actions'

import database from '../../data/database';
import { TouchableOpacity, Text } from 'react-native';

function TableModal({navigation, route, state, changeState, props}) {
  const {current, occupation, division, details, charge, area, height, situation,} = state[0];
  const {goBack} = props;

  function handleAddState(p){
    changeState(current,p);
    navigation.goBack();
  }

  const indexOccupation = database.occupation.indexOf(occupation);

  const a = database.division[indexOccupation];
  const b = database.description[indexOccupation];

  function Row(props) {
    const {i} = props;
    return (
      <DataTable.Row>
        <TouchableOpacity onPress={goBack(a[i])}><DataTable.Cell><Text>{a[i]}</Text></DataTable.Cell></TouchableOpacity>
        <DataTable.Cell>{b[i]}</DataTable.Cell>
      </DataTable.Row>
    );
  }

  function Cell() {
    const rows = [];

    a.forEach((product, index) => {
      rows.push(
        <Row i={index} key={product} />
      );
    });

    return (
      //<Tablew>
      <>
        <DataTable.Header>
          <DataTable.Row>
            <DataTable.Title>Divisão</DataTable.Title>
            <DataTable.Title>Descrição</DataTable.Title>
          </DataTable.Row>
        </DataTable.Header>
        <DataTable>{rows}</DataTable>
        </>
      //</Tablew>
    );
  }

  function TableModal() {
    return <Cell/>;
  }


    return <TableModal/>;

  }


const mapStateToProps = state => ({
  state: state.legislation,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(dispatchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TableModal);
