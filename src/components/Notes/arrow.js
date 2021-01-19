import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as dispatchActions from '../../store/modules/legislation/actions';

import { Iconn } from './styles';

function Arrow({ state, props }) {
  const { division, height, area, situation } = state[0];
  const { item, collapse, handleCol, clickedITem } = props;

  function Ico() {
    return (
      <Iconn
        name="keyboard-arrow-down"
        size={25}
        color="#333"
        backgroundColor="rgba(255,255,255,.95)"
        collapse={collapse}
        item={item}
        clickedITem={clickedITem}
        onPress={() => handleCol(item)}
      />
    );
  }

  function Compare() {
    if (
      (area <= 750 && height === 'H ≤ 12m') ||
      (division === 'A-2' && area <= 1200) ||
      (division === 'A-3' && area <= 1200) ||
      (situation === 'Construida' && area <= 1200)
    ) {
      if (
        (division === 'F-1' ||
          division === 'F-2' ||
          division === 'F-3' ||
          division === 'F-4' ||
          division === 'F-5' ||
          division === 'F-6' ||
          division === 'F-8' ||
          division === 'F-9' ||
          division === 'F-10' ||
          division === 'F-11') &&
        (item === 'Controle de Materiais de Acabamento e de Revestimento' ||
          item === 'Brigada de incendio')
      ) {
        return <Ico />;
      } else if (
        division !== 'F-7' &&
        division !== 'L-1' &&
        division !== 'L-2' &&
        division !== 'L-3' &&
        division !== 'M-3' &&
        item === 'Iluminação de emergência'
      ) {
        return <Ico />;
      } else if (
        (division === 'B-1' || division === 'B-2') &&
        item === 'Sinalização de Emergência'
      ) {
        return <Ico />;
      } else if (
        (division === 'H-2' ||
          division === 'H-3' ||
          division === 'H-5' ||
          division === 'F-1' ||
          division === 'F-2' ||
          division === 'F-3' ||
          division === 'F-4' ||
          division === 'F-8' ||
          division === 'F-9' ||
          division === 'F-10') &&
        item === 'Extintores'
      ) {
        return <Ico />;
      } else if (
        (division === 'F-5' || division === 'F-6' || division === 'F-11') &&
        item === 'Plano de Intervenção de Incêndio'
      ) {
        return <Ico />;
      } else if (division === 'M-3' && item === 'Hidrantes e Mangotinhos') {
        return <Ico />;
      } else if (
        division === 'F-7' &&
        (item === 'Plano de Intervenção de Incêndio' ||
          item === 'Brigada de Incêndio' ||
          item === 'Iluminação de emergência')
      ) {
        return <Ico />;
      } else if (
        division === 'F-7' &&
        item === 'Controle de Materiais de Acabamento e de Revestimento'
      ) {
        return <Ico />;
      } else if (division === 'L-1' && item === 'Iluminação de emergência') {
        return <Ico />;
      } else if (
        (division === 'L-2' || division === 'L-3') &&
        item === 'Iluminação de emergência'
      ) {
        return <Ico />;
      } else if (
        (division === 'L-2' || division === 'L-3') &&
        item === 'Alarme de Incêndio'
      ) {
        return <Ico />;
      } else if (
        (division === 'L-2' || division === 'L-3') &&
        item === 'Extintores'
      ) {
        return <Ico />;
      }
      return null;
    } else if (area >= 750 && height === 'H ≤ 12m') {
      if (
        (division === 'B-1' || division === 'B-2') &&
        (item === 'Iluminação de emergência' ||
          item === 'Sinalização de Emergência')
      ) {
        return <Ico />;
      } else if (
        (division === 'B-1' || division === 'B-2') &&
        item === 'Alarme de Incêndio'
      ) {
        return <Ico />;
      } else if (
        (division === 'C-1' ||
          division === 'C-2' ||
          division === 'C-3' ||
          division === 'I-3' ||
          division === 'J-2' ||
          division === 'J-3' ||
          division === 'J-4') &&
        item === 'Compartimentação Horizontal'
      ) {
        return <Ico />;
      } else if (
        (division === 'C-1' || division === 'C-2' || division === 'C-3') &&
        item === 'Controle de Fumaça'
      ) {
        return <Ico />;
      } else if (
        (division === 'F-5' || division === 'F-6' || division === 'F-11') &&
        (item === 'Plano de Intervenção de Incêndio' ||
          item === 'Detecçao de Incêndio' ||
          item === 'Controle de Fumaça')
      ) {
        return <Ico />;
      } else if (
        (division === 'H-2' || division === 'H-5') &&
        (item === 'Extintores' || item === 'Hidrantes e Mangotinhos')
      ) {
        return <Ico />;
      } else if (
        (division === 'I-1' || division === 'I-2') &&
        item === 'Compartimentação Horizontal'
      ) {
        return <Ico />;
      } else if (division === 'I-1' && item === 'Hidrantes e Mangotinhos') {
        return <Ico />;
      } else if (division === 'J-1' && item === 'Extintores') {
        return <Ico />;
      } else if (division === 'J-1' && item === 'Hidrantes e Mangotinhos') {
        return <Ico />;
      } else if (
        (division === 'J-3' || division === 'J-4') &&
        item === 'Chuveiros Automáticos'
      ) {
        return <Ico />;
      } else if (division === 'M-3' && item === 'Hidrantes e Mangotinhos') {
        return <Ico />;
      }
      return null;
    } else if (height === '12m < H ≤ 30m') {
      if (
        (division === 'B-1' ||
          division === 'B-2' ||
          division === 'C-1' ||
          division === 'C-2' ||
          division === 'C-3' ||
          division === 'D-1' ||
          division === 'D-2' ||
          division === 'D-3' ||
          division === 'D-4' ||
          division === 'G-4' ||
          division === 'H-3' ||
          division === 'I-1' ||
          division === 'I-2' ||
          division === 'J-2') &&
        item === 'Compartimentação Horizontal'
      ) {
        return <Ico />;
      } else if (
        (division === 'B-1' ||
          division === 'B-2' ||
          division === 'C-1' ||
          division === 'C-2' ||
          division === 'C-3' ||
          division === 'D-1' ||
          division === 'D-2' ||
          division === 'D-3' ||
          division === 'D-4' ||
          division === 'E-1' ||
          division === 'E-2' ||
          division === 'E-3' ||
          division === 'E-4' ||
          division === 'E-5' ||
          division === 'E-6' ||
          division === 'F-1' ||
          division === 'F-2' ||
          division === 'F-3' ||
          division === 'F-4' ||
          division === 'F-8' ||
          division === 'F-9' ||
          division === 'F-10' ||
          division === 'G-4' ||
          division === 'H-1') &&
        item === 'Compartimentação Vertical'
      ) {
        return <Ico />;
      } else if (division === 'I-2' && item === 'Compartimentação Vertical') {
        return <Ico />;
      } else if (
        (division === 'B-1' || division === 'B-2') &&
        item === 'Alarme de Incêndio'
      ) {
        return <Ico />;
      } else if (division === 'F-3' && item === 'Compartimentação Vertical') {
        return <Ico />;
      } else if (
        (division === 'F-5' || division === 'F-6' || division === 'F-11') &&
        item === 'Controle de Fumaça'
      ) {
        return <Ico />;
      } else if (division === 'G-1' && item === 'Alarme de Incêndio') {
        return <Ico />;
      } else if (
        (division === 'H-2' || division === 'H-5') &&
        (item === 'Extintores' || item === 'Hidrantes e Mangotinhos')
      ) {
        return <Ico />;
      } else if (
        (division === 'H-2' || division === 'H-5') &&
        item === 'Controle de Fumaça'
      ) {
        return <Ico />;
      } else if (division === 'I-1' && item === 'Hidrantes e Mangotinhos') {
        return <Ico />;
      } else if (division === 'J-1' && item === 'Extintores') {
        return <Ico />;
      } else if (division === 'J-1' && item === 'Hidrantes e Mangotinhos') {
        return <Ico />;
      } else if (division === 'M-3' && item === 'Hidrantes e Mangotinhos') {
        return <Ico />;
      } else if (division === 'M-3' && item === 'Chuveiros Automaticos') {
        return <Ico />;
      }
      return null;
    } else if (height === '30m < H ≤ 54m') {
      if (
        (division === 'B-1' || division === 'B-2') &&
        item === 'Detecçao de Incêndio'
      ) {
        return <Ico />;
      } else if (
        (division === 'B-1' || division === 'B-2') &&
        item === 'Alarme de Incêndio'
      ) {
        return <Ico />;
      } else if (division === 'F-3' && item === 'Compartimentação Vertical') {
        return <Ico />;
      } else if (division === 'G-1' && item === 'Alarme de Incêndio') {
        return <Ico />;
      } else if (division === 'H-1' && item === 'Compartimentação Vertical') {
        return <Ico />;
      } else if (
        (division === 'H-2' || division === 'H-5') &&
        (item === 'Extintores' || item === 'Hidrantes e Mangotinhos')
      ) {
        return <Ico />;
      } else if (division === 'I-1' && item === 'Hidrantes e Mangotinhos') {
        return <Ico />;
      } else if (division === 'J-1' && item === 'Extintores') {
        return <Ico />;
      } else if (division === 'J-1' && item === 'Hidrantes e Mangotinhos') {
        return <Ico />;
      } else if (division === 'J-2' && item === 'Compartimentação Horizontal') {
        return <Ico />;
      } else if (division === 'M-3' && item === 'Hidrantes e Mangotinhos') {
        return <Ico />;
      } else if (division === 'M-3' && item === 'Chuveiros Automaticos') {
        return <Ico />;
      }
      return null;
    } else if (height === 'H > 54') {
      if (
        (division === 'B-1' || division === 'B-2') &&
        item === 'Detecçao de Incêndio'
      ) {
        return <Ico />;
      } else if (
        (division === 'B-1' || division === 'B-2') &&
        item === 'Alarme de Incêndio'
      ) {
        return <Ico />;
      } else if (division === 'F-3' && item === 'Compartimentação Vertical') {
        return <Ico />;
      } else if (division === 'G-1' && item === 'Alarme de Incêndio') {
        return <Ico />;
      } else if (
        (division === 'H-2' || division === 'H-5') &&
        (item === 'Extintores' || item === 'Hidrantes e Mangotinhos')
      ) {
        return <Ico />;
      } else if (division === 'I-1' && item === 'Hidrantes e Mangotinhos') {
        return <Ico />;
      } else if (division === 'J-1' && item === 'Extintores') {
        return <Ico />;
      } else if (division === 'J-1' && item === 'Hidrantes e Mangotinhos') {
        return <Ico />;
      } else if (division === 'M-3' && item === 'Hidrantes e Mangotinhos') {
        return <Ico />;
      } else if (division === 'M-3' && item === 'Chuveiros Automaticos') {
        return <Ico />;
      }
      return null;
    } else {
      if (
        division === 'F-7' &&
        (item === 'Plano de Intervenção de Incêndio' ||
          item === 'Brigada de Incêndio' ||
          item === 'Iluminação de emergência')
      ) {
        return <Ico />;
      } else if (
        division === 'F-7' &&
        item === 'Controle de Materiais de Acabamento e de Revestimento'
      ) {
        return <Ico />;
      } else if (division === 'L-1' && item === 'Iluminação de emergência') {
        return <Ico />;
      } else if (
        (division === 'L-2' || division === 'L-3') &&
        item === 'Iluminação de emergência'
      ) {
        return <Ico />;
      } else if (
        (division === 'L-2' || division === 'L-3') &&
        item === 'Alarme de Incêndio'
      ) {
        return <Ico />;
      } else if (
        (division === 'L-2' || division === 'L-3') &&
        item === 'Extintores'
      ) {
        return <Ico />;
      }
      return null;
    }
  }

  return <Compare />;
}

const mapStateToProps = (state, ownProps) => ({
  state: state.legislation,
  props: ownProps,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(dispatchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Arrow);
