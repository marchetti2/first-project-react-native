import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as dispatchActions from '../../store/modules/legislation/actions';

import notes from '../../data/notes';
import { SubText, Border } from './styles';

function Notes({ state, props }) {
  const { division, height, area, situation } = state[0];
  const { collapse, item, clickedITem } = props;

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
        ((item === 'Controle de Materiais de Acabamento e de Revestimento' &&
          clickedITem ===
            'Controle de Materiais de Acabamento e de Revestimento') ||
          (item === 'Brigada de incendio' &&
            clickedITem === 'Brigada de incendio'))
      ) {
        return (
          <Border>
            <SubText>{notes.one[0]}</SubText>
          </Border>
        );
      } else if (
        division !== 'F-7' &&
        division !== 'L-1' &&
        division !== 'L-2' &&
        division !== 'L-3' &&
        division !== 'M-3' &&
        item === 'Iluminação de emergência' &&
        clickedITem === 'Iluminação de emergência'
      ) {
        if (
          (division === 'B-1' || division === 'B-2') &&
          item === 'Iluminação de emergência' &&
          clickedITem === 'Iluminação de emergência'
        ) {
          return (
            <Border>
              <SubText>{notes.one[1]}</SubText>
              <SubText>{notes.one[2]}</SubText>
            </Border>
          );
        }

        return (
          <Border>
            <SubText>{notes.one[1]}</SubText>
          </Border>
        );
      } else if (
        (division === 'B-1' || division === 'B-2') &&
        item === 'Sinalização de Emergência' &&
        clickedITem === 'Sinalização de Emergência'
      ) {
        return (
          <Border>
            <SubText>{notes.one[2]}</SubText>
          </Border>
        );
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
        item === 'Extintores' &&
        clickedITem === 'Extintores'
      ) {
        return (
          <Border>
            <SubText>{notes.one[3]}</SubText>
          </Border>
        );
      } else if (
        (division === 'F-5' || division === 'F-6' || division === 'F-11') &&
        item === 'Plano de Intervenção de Incêndio' &&
        clickedITem === 'Plano de Intervenção de Incêndio'
      ) {
        return (
          <Border>
            <SubText>{notes.one[4]}</SubText>
          </Border>
        );
      } else if (
        division === 'M-3' &&
        item === 'Hidrantes e Mangotinhos' &&
        clickedITem === 'Hidrantes e Mangotinhos'
      ) {
        return (
          <Border>
            <SubText>{notes.ninenteen[0]}</SubText>
          </Border>
        );
      } else if (
        division === 'F-7' &&
        ((item === 'Plano de Intervenção de Incêndio' &&
          clickedITem === 'Plano de Intervenção de Incêndio') ||
          (item === 'Brigada de Incêndio' &&
            clickedITem === 'Brigada de Incêndio') ||
          (item === 'Iluminação de emergência' &&
            clickedITem === 'Iluminação de emergência'))
      ) {
        return (
          <Border>
            <SubText>{notes.nine[0]}</SubText>
          </Border>
        );
      } else if (
        division === 'F-7' &&
        item === 'Controle de Materiais de Acabamento e de Revestimento' &&
        clickedITem === 'Controle de Materiais de Acabamento e de Revestimento'
      ) {
        return (
          <Border>
            <SubText>{notes.nine[1]}</SubText>
          </Border>
        );
      } else if (
        division === 'L-1' &&
        item === 'Iluminação de emergência' &&
        clickedITem === 'Iluminação de emergência'
      ) {
        return (
          <Border>
            <SubText>{notes.seventeen[0]}</SubText>
          </Border>
        );
      } else if (
        (division === 'L-2' || division === 'L-3') &&
        item === 'Iluminação de emergência' &&
        clickedITem === 'Iluminação de emergência'
      ) {
        return (
          <Border>
            <SubText>{notes.seventeen[0]}</SubText>
            <SubText>{notes.seventeen[1]}</SubText>
          </Border>
        );
      } else if (
        (division === 'L-2' || division === 'L-3') &&
        item === 'Alarme de Incêndio' &&
        clickedITem === 'Alarme de Incêndio'
      ) {
        return (
          <Border>
            <SubText>{notes.seventeen[0]}</SubText>
          </Border>
        );
      } else if (
        (division === 'L-2' || division === 'L-3') &&
        item === 'Extintores' &&
        clickedITem === 'Extintores'
      ) {
        return (
          <Border>
            <SubText>{notes.seventeen[2]}</SubText>
          </Border>
        );
      }
      return null;
    } else if (area >= 750 && height === 'H ≤ 12m') {
      if (
        (division === 'B-1' || division === 'B-2') &&
        ((item === 'Iluminação de emergência' &&
          clickedITem === 'Iluminação de emergência') ||
          (item === 'Sinalização de Emergência' &&
            clickedITem === 'Sinalização de Emergência'))
      ) {
        return (
          <Border>
            <SubText>{notes.tree[2]}</SubText>
          </Border>
        );
      } else if (
        (division === 'B-1' || division === 'B-2') &&
        item === 'Alarme de Incêndio' &&
        clickedITem === 'Alarme de Incêndio'
      ) {
        return (
          <Border>
            <SubText>{notes.tree[4]}</SubText>
          </Border>
        );
      } else if (
        (division === 'C-1' ||
          division === 'C-2' ||
          division === 'C-3' ||
          division === 'I-3' ||
          division === 'J-2' ||
          division === 'J-3' ||
          division === 'J-4') &&
        item === 'Compartimentação Horizontal' &&
        clickedITem === 'Compartimentação Horizontal'
      ) {
        return (
          <Border>
            <SubText>{notes.four[0]}</SubText>
          </Border>
        );
      } else if (
        (division === 'C-1' || division === 'C-2' || division === 'C-3') &&
        item === 'Controle de Fumaça' &&
        clickedITem === 'Controle de Fumaça'
      ) {
        return (
          <Border>
            <SubText>{notes.four[4]}</SubText>
          </Border>
        );
      } else if (
        (division === 'F-5' || division === 'F-6' || division === 'F-11') &&
        ((item === 'Plano de Intervenção de Incêndio' &&
          clickedITem === 'Plano de Intervenção de Incêndio') ||
          (item === 'Detecçao de Incêndio' &&
            clickedITem === 'Detecçao de Incêndio') ||
          (item === 'Controle de Fumaça' &&
            clickedITem === 'Controle de Fumaça'))
      ) {
        return (
          <Border>
            <SubText>{notes.four[4]}</SubText>
          </Border>
        );
      } else if (
        (division === 'H-2' || division === 'H-5') &&
        ((item === 'Extintores' && clickedITem === 'Extintores') ||
          (item === 'Hidrantes e Mangotinhos' &&
            clickedITem === 'Hidrantes e Mangotinhos'))
      ) {
        return (
          <Border>
            <SubText>{notes.thirteen[1]}</SubText>
          </Border>
        );
      } else if (
        (division === 'I-1' || division === 'I-2') &&
        item === 'Compartimentação Horizontal' &&
        clickedITem === 'Compartimentação Horizontal'
      ) {
        return (
          <Border>
            <SubText>{notes.fifteen[0]}</SubText>
            <SubText>{notes.fifteen[1]}</SubText>
          </Border>
        );
      } else if (
        division === 'I-1' &&
        item === 'Hidrantes e Mangotinhos' &&
        clickedITem === 'Hidrantes e Mangotinhos'
      ) {
        return (
          <Border>
            <SubText>{notes.fifteen[3]}</SubText>
          </Border>
        );
      } else if (
        division === 'J-1' &&
        item === 'Extintores' &&
        clickedITem === 'Extintores'
      ) {
        return (
          <Border>
            <SubText>{notes.sixteen[1]}</SubText>
          </Border>
        );
      } else if (
        division === 'J-1' &&
        item === 'Hidrantes e Mangotinhos' &&
        clickedITem === 'Hidrantes e Mangotinhos'
      ) {
        return (
          <Border>
            <SubText>{notes.sixteen[2]}</SubText>
          </Border>
        );
      } else if (
        (division === 'J-3' || division === 'J-4') &&
        item === 'Chuveiros Automáticos' &&
        clickedITem === 'Chuveiros Automáticos'
      ) {
        return (
          <Border>
            <SubText>{notes.sixteen[3]}</SubText>
          </Border>
        );
      } else if (
        division === 'M-3' &&
        item === 'Hidrantes e Mangotinhos' &&
        clickedITem === 'Hidrantes e Mangotinhos'
      ) {
        return (
          <Border>
            <SubText>{notes.ninenteen[0]}</SubText>
          </Border>
        );
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
        item === 'Compartimentação Horizontal' &&
        clickedITem === 'Compartimentação Horizontal'
      ) {
        return (
          <Border>
            <SubText>{notes.tree[0]}</SubText>
          </Border>
        );
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
        item === 'Compartimentação Vertical' &&
        clickedITem === 'Compartimentação Vertical'
      ) {
        return (
          <Border>
            <SubText>{notes.tree[1]}</SubText>
          </Border>
        );
      } else if (
        division === 'I-2' &&
        item === 'Compartimentação Vertical' &&
        clickedITem === 'Compartimentação Vertical'
      ) {
        return (
          <Border>
            <SubText>{notes.tree[0]}</SubText>
          </Border>
        );
      } else if (
        (division === 'B-1' || division === 'B-2') &&
        item === 'Alarme de Incêndio' &&
        clickedITem === 'Alarme de Incêndio'
      ) {
        return (
          <Border>
            <SubText>{notes.tree[4]}</SubText>
          </Border>
        );
      } else if (
        division === 'F-3' &&
        item === 'Compartimentação Vertical' &&
        clickedITem === 'Compartimentação Vertical'
      ) {
        return (
          <Border>
            <SubText>{notes.seven[0]}</SubText>
            <SubText>{notes.seven[1]}</SubText>
          </Border>
        );
      } else if (
        (division === 'F-5' || division === 'F-6' || division === 'F-11') &&
        item === 'Controle de Fumaça' &&
        clickedITem === 'Controle de Fumaça'
      ) {
        return (
          <Border>
            <SubText>{notes.eight[0]}</SubText>
          </Border>
        );
      } else if (
        division === 'G-1' &&
        item === 'Alarme de Incêndio' &&
        clickedITem === 'Alarme de Incêndio'
      ) {
        return (
          <Border>
            <SubText>{notes.ten[0]}</SubText>
          </Border>
        );
      } else if (
        (division === 'H-2' || division === 'H-5') &&
        ((item === 'Extintores' && clickedITem === 'Extintores') ||
          (item === 'Hidrantes e Mangotinhos' &&
            clickedITem === 'Hidrantes e Mangotinhos'))
      ) {
        return (
          <Border>
            <SubText>{notes.thirteen[1]}</SubText>
          </Border>
        );
      } else if (
        (division === 'H-2' || division === 'H-5') &&
        item === 'Controle de Fumaça' &&
        clickedITem === 'Controle de Fumaça'
      ) {
        return (
          <Border>
            <SubText>{notes.thirteen[2]}</SubText>
          </Border>
        );
      } else if (
        division === 'I-1' &&
        item === 'Hidrantes e Mangotinhos' &&
        clickedITem === 'Hidrantes e Mangotinhos'
      ) {
        return (
          <Border>
            <SubText>{notes.fifteen[2]}</SubText>
          </Border>
        );
      } else if (
        division === 'J-1' &&
        item === 'Extintores' &&
        clickedITem === 'Extintores'
      ) {
        return (
          <Border>
            <SubText>{notes.sixteen[1]}</SubText>
          </Border>
        );
      } else if (
        division === 'J-1' &&
        item === 'Hidrantes e Mangotinhos' &&
        clickedITem === 'Hidrantes e Mangotinhos'
      ) {
        return (
          <Border>
            <SubText>{notes.sixteen[2]}</SubText>
          </Border>
        );
      } else if (
        division === 'M-3' &&
        item === 'Hidrantes e Mangotinhos' &&
        clickedITem === 'Hidrantes e Mangotinhos'
      ) {
        return (
          <Border>
            <SubText>{notes.ninenteen[0]}</SubText>
          </Border>
        );
      } else if (
        division === 'M-3' &&
        item === 'Chuveiros Automaticos' &&
        clickedITem === 'Chuveiros Automaticos'
      ) {
        return (
          <Border>
            <SubText>{notes.ninenteen[1]}</SubText>
          </Border>
        );
      }
      return null;
    } else if (height === '30m < H ≤ 54m') {
      if (
        (division === 'B-1' || division === 'B-2') &&
        item === 'Detecçao de Incêndio' &&
        clickedITem === 'Detecçao de Incêndio'
      ) {
        return (
          <Border>
            <SubText>{notes.tree[3]}</SubText>
          </Border>
        );
      } else if (
        (division === 'B-1' || division === 'B-2') &&
        item === 'Alarme de Incêndio' &&
        clickedITem === 'Alarme de Incêndio'
      ) {
        return (
          <Border>
            <SubText>{notes.tree[4]}</SubText>
          </Border>
        );
      } else if (
        division === 'F-3' &&
        item === 'Compartimentação Vertical' &&
        clickedITem === 'Compartimentação Vertical'
      ) {
        return (
          <Border>
            <SubText>{notes.seven[1]}</SubText>
          </Border>
        );
      } else if (
        division === 'G-1' &&
        item === 'Alarme de Incêndio' &&
        clickedITem === 'Alarme de Incêndio'
      ) {
        return (
          <Border>
            <SubText>{notes.ten[0]}</SubText>
          </Border>
        );
      } else if (
        division === 'H-1' &&
        item === 'Compartimentação Vertical' &&
        clickedITem === 'Compartimentação Vertical'
      ) {
        return (
          <Border>
            <SubText>{notes.thirteen[0]}</SubText>
          </Border>
        );
      } else if (
        (division === 'H-2' || division === 'H-5') &&
        ((item === 'Extintores' && clickedITem === 'Extintores') ||
          (item === 'Hidrantes e Mangotinhos' &&
            clickedITem === 'Hidrantes e Mangotinhos'))
      ) {
        return (
          <Border>
            <SubText>{notes.thirteen[1]}</SubText>
          </Border>
        );
      } else if (
        division === 'I-1' &&
        item === 'Hidrantes e Mangotinhos' &&
        clickedITem === 'Hidrantes e Mangotinhos'
      ) {
        return (
          <Border>
            <SubText>{notes.fifteen[2]}</SubText>
          </Border>
        );
      } else if (
        division === 'J-1' &&
        item === 'Extintores' &&
        clickedITem === 'Extintores'
      ) {
        return (
          <Border>
            <SubText>{notes.sixteen[1]}</SubText>
          </Border>
        );
      } else if (
        division === 'J-1' &&
        item === 'Hidrantes e Mangotinhos' &&
        clickedITem === 'Hidrantes e Mangotinhos'
      ) {
        return (
          <Border>
            <SubText>{notes.sixteen[2]}</SubText>
          </Border>
        );
      } else if (
        division === 'J-2' &&
        item === 'Compartimentação Horizontal' &&
        clickedITem === 'Compartimentação Horizontal'
      ) {
        return (
          <Border>
            <SubText>{notes.sixteen[1]}</SubText>
          </Border>
        );
      } else if (
        division === 'M-3' &&
        item === 'Hidrantes e Mangotinhos' &&
        clickedITem === 'Hidrantes e Mangotinhos'
      ) {
        return (
          <Border>
            <SubText>{notes.ninenteen[0]}</SubText>
          </Border>
        );
      } else if (
        division === 'M-3' &&
        item === 'Chuveiros Automaticos' &&
        clickedITem === 'Chuveiros Automaticos'
      ) {
        return (
          <Border>
            <SubText>{notes.ninenteen[1]}</SubText>
          </Border>
        );
      }
      return null;
    } else if (height === 'H > 54') {
      if (
        (division === 'B-1' || division === 'B-2') &&
        item === 'Detecçao de Incêndio' &&
        clickedITem === 'Detecçao de Incêndio'
      ) {
        return (
          <Border>
            <SubText>{notes.tree[3]}</SubText>
          </Border>
        );
      } else if (
        (division === 'B-1' || division === 'B-2') &&
        item === 'Alarme de Incêndio' &&
        clickedITem === 'Alarme de Incêndio'
      ) {
        return (
          <Border>
            <SubText>{notes.tree[4]}</SubText>
          </Border>
        );
      } else if (
        division === 'F-3' &&
        item === 'Compartimentação Vertical' &&
        clickedITem === 'Compartimentação Vertical'
      ) {
        return (
          <Border>
            <SubText>{notes.seven[1]}</SubText>
          </Border>
        );
      } else if (
        division === 'G-1' &&
        item === 'Alarme de Incêndio' &&
        clickedITem === 'Alarme de Incêndio'
      ) {
        return (
          <Border>
            <SubText>{notes.ten[0]}</SubText>
          </Border>
        );
      } else if (
        ((division === 'H-2' || division === 'H-5') &&
          item === 'Extintores' &&
          clickedITem === 'Extintores') ||
        (item === 'Hidrantes e Mangotinhos' &&
          clickedITem === 'Hidrantes e Mangotinhos')
      ) {
        return (
          <Border>
            <SubText>{notes.thirteen[1]}</SubText>
          </Border>
        );
      } else if (
        division === 'I-1' &&
        item === 'Hidrantes e Mangotinhos' &&
        clickedITem === 'Hidrantes e Mangotinhos'
      ) {
        return (
          <Border>
            <SubText>{notes.fifteen[2]}</SubText>
          </Border>
        );
      } else if (
        division === 'J-1' &&
        item === 'Extintores' &&
        clickedITem === 'Extintores'
      ) {
        return (
          <Border>
            <SubText>{notes.sixteen[1]}</SubText>
          </Border>
        );
      } else if (
        division === 'J-1' &&
        item === 'Hidrantes e Mangotinhos' &&
        clickedITem === 'Hidrantes e Mangotinhos'
      ) {
        return (
          <Border>
            <SubText>{notes.sixteen[2]}</SubText>
          </Border>
        );
      } else if (
        division === 'M-3' &&
        item === 'Hidrantes e Mangotinhos' &&
        clickedITem === 'Hidrantes e Mangotinhos'
      ) {
        return (
          <Border>
            <SubText>{notes.ninenteen[0]}</SubText>
          </Border>
        );
      } else if (
        division === 'M-3' &&
        item === 'Chuveiros Automaticos' &&
        clickedITem === 'Chuveiros Automaticos'
      ) {
        return (
          <Border>
            <SubText>{notes.ninenteen[1]}</SubText>
          </Border>
        );
      }
      return null;
    } else {
      if (
        division === 'F-7' &&
        ((item === 'Plano de Intervenção de Incêndio' &&
          clickedITem === 'Plano de Intervenção de Incêndio') ||
          (item === 'Brigada de Incêndio' &&
            clickedITem === 'Brigada de Incêndio') ||
          (item === 'Iluminação de emergência' &&
            clickedITem === 'Iluminação de emergência'))
      ) {
        return (
          <Border>
            <SubText>{notes.nine[0]}</SubText>
          </Border>
        );
      } else if (
        division === 'F-7' &&
        item === 'Controle de Materiais de Acabamento e de Revestimento' &&
        clickedITem === 'Controle de Materiais de Acabamento e de Revestimento'
      ) {
        return (
          <Border>
            <SubText>{notes.nine[1]}</SubText>
          </Border>
        );
      } else if (
        division === 'L-1' &&
        item === 'Iluminação de emergência' &&
        clickedITem === 'Iluminação de emergência'
      ) {
        return (
          <Border>
            <SubText>{notes.seventeen[0]}</SubText>
          </Border>
        );
      } else if (
        (division === 'L-2' || division === 'L-3') &&
        item === 'Iluminação de emergência' &&
        clickedITem === 'Iluminação de emergência'
      ) {
        return (
          <Border>
            <SubText>{notes.seventeen[0]}</SubText>
            <SubText>{notes.seventeen[1]}</SubText>
          </Border>
        );
      } else if (
        (division === 'L-2' || division === 'L-3') &&
        item === 'Alarme de Incêndio' &&
        clickedITem === 'Alarme de Incêndio'
      ) {
        return (
          <Border>
            <SubText>{notes.seventeen[0]}</SubText>
          </Border>
        );
      } else if (
        (division === 'L-2' || division === 'L-3') &&
        item === 'Extintores' &&
        clickedITem === 'Extintores'
      ) {
        return (
          <Border>
            <SubText>{notes.seventeen[2]}</SubText>
          </Border>
        );
      }
      return null;
    }
  }

  return collapse ? <Compare /> : null;
}

const mapStateToProps = (state, ownProps) => ({
  state: state.legislation,
  props: ownProps,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(dispatchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
