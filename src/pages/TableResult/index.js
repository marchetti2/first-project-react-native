import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as dispatchActions from '../../store/modules/legislation/actions';

import tables from '../../data/tables';
import Notes from '../../components/Notes';
import Arrow from '../../components/Notes/arrow';
import {
  Container,
  POne,
  Text,
  Div,
  DivTwo,
  DivTree,
  FlatListt,
  TextTwo,
} from './styles';

function TableResult({ state }) {
  const { division, area, height, situation } = state[0];
  const [count, setCount] = useState(0);
  const [collapse, setCollapse] = useState(false);
  const [clickedITem, setClickedITem] = useState('');

  function handleCol(item: string) {
    setClickedITem(item);
    setCount(count + 1);
    /*
    if (clickedITem === item) {
      setCount(count + 1);
    } else {
      return null;
    }
*/
    if (count % 2 === 0) {
      setCollapse(true);
    } else {
      setCollapse(false);
    }
  }

  function compare() {
    function old(value: string) {
      return (
        value !== 'Acesso de Viaturas' &&
        value !== 'Segurança Estrutural contra Incêndio' &&
        value !== 'Compartimentação Horizontal' &&
        value !== 'Compartimentação Vertical' &&
        value !== 'Chuveiros Automáticos' &&
        value !== 'Controle de Fumaça'
      );
    }
    function brigAndAlarm(value: string) {
      return value !== 'Brigada de Incêndio' && value !== 'Alarme de Incêndio';
    }
    function alarm(value: string) {
      return value !== 'Alarme de Incêndio';
    }
    function plan(value: string) {
      return value !== 'Plano de Intervenção de Incêndio';
    }
    function cmar(value: string) {
      return value !== 'Controle de Materiais de Acabamento e de Revestimento';
    }
    function Result(props) {
      const { item } = props;
      if (
        division === 'M-1' ||
        division === 'M-2' ||
        division === 'M-4' ||
        division === 'M-5' ||
        division === 'M-6' ||
        division === 'M-7'
      ) {
        return (
          <Div>
            <POne>
              <DivTree>
                <TextTwo onPress={() => handleCol(item)}>{item}</TextTwo>
                <Arrow
                  handleCol={handleCol}
                  item={item}
                  collapse={collapse}
                  clickedITem={clickedITem}
                />
              </DivTree>
              <Notes
                collapse={collapse}
                item={item}
                clickedITem={clickedITem}
              />
            </POne>
          </Div>
        );
      }
      return (
        <Div>
          <POne>
            <DivTwo>
              <Text onPress={() => handleCol(item)}>{item}</Text>
              <Arrow
                handleCol={handleCol}
                item={item}
                collapse={collapse}
                clickedITem={clickedITem}
              />
            </DivTwo>
            <Notes collapse={collapse} item={item} clickedITem={clickedITem} />
          </POne>
        </Div>
      );
    }

    if (area <= 750 && height === 'H ≤ 12m') {
      const s = tables.tabA.div;
      for (const r of s) {
        const d = r.indexOf(division);
        if (d !== -1) {
          if (situation === 'Construida') {
            const indexX = tables.tabA.div.indexOf(r);
            const data = tables.tabA.medidas[indexX].filter(old);
            return (
              <FlatListt
                data={data}
                renderItem={({ item }) => <Result item={item} />}
                keyExtractor={item => item}
              />
            );
          }
          const indexX = tables.tabA.div.indexOf(r);
          const data = tables.tabA.medidas[indexX];
          return (
            <FlatListt
              data={data}
              renderItem={({ item }) => <Result item={item} />}
              keyExtractor={item => item}
            />
          );
        }
      }
    } else if (height === 'H ≤ 12m') {
      if (
        (division === 'A-2' && area <= 1200) ||
        (division === 'A-3' && area <= 1200) ||
        (situation === 'Construida' && area <= 1200)
      ) {
        const s = tables.tabA.div;
        for (const r of s) {
          const d = r.indexOf(division);
          if (d !== -1) {
            const indexX = tables.tabA.div.indexOf(r);
            const data = tables.tabA.medidas[indexX].filter(old);
            return (
              <FlatListt
                data={data}
                renderItem={({ item }) => <Result item={item} />}
                keyExtractor={item => item}
              />
            );
          }
        }
      } else if (situation === 'Construida') {
        const s = tables.tabB.div;
        for (const r of s) {
          const d = r.indexOf(division);
          if (d !== -1) {
            if (
              (division === 'C-1' && area <= 2000) ||
              (division === 'C-2' && area <= 2000) ||
              (division === 'C-3' && area <= 2000) ||
              (division === 'I-1' && area <= 2000) ||
              (division === 'I-2' && area <= 2000) ||
              (division === 'J-1' && area <= 2000) ||
              (division === 'J-2' && area <= 2000)
            ) {
              const indexX = tables.tabB.div.indexOf(r);
              const data = tables.tabB.medidas[indexX]
                .filter(brigAndAlarm)
                .filter(old);
              return (
                <FlatListt
                  data={data}
                  renderItem={({ item }) => <Result item={item} />}
                  keyExtractor={item => item}
                />
              );
            } else if (
              (division === 'D-1' && area <= 2000) ||
              (division === 'D-2' && area <= 2000) ||
              (division === 'D-3' && area <= 2000) ||
              (division === 'D-4' && area <= 2000)
            ) {
              const indexX = tables.tabB.div.indexOf(r);
              const data = tables.tabB.medidas[indexX]
                .filter(alarm)
                .filter(old);
              return (
                <FlatListt
                  data={data}
                  renderItem={({ item }) => <Result item={item} />}
                  keyExtractor={item => item}
                />
              );
            } else if (division === 'G-5' && area <= 5000) {
              const indexX = tables.tabB.div.indexOf(r);
              const data = tables.tabB.medidas[indexX].filter(plan).filter(old);
              return (
                <FlatListt
                  data={data}
                  renderItem={({ item }) => <Result item={item} />}
                  keyExtractor={item => item}
                />
              );
            } else if (division === 'I-3' && area <= 5000) {
              const indexX = tables.tabB.div.indexOf(r);
              const data = tables.tabB.medidas[indexX].filter(cmar).filter(old);

              return (
                <FlatListt
                  data={data}
                  renderItem={({ item }) => <Result item={item} />}
                  keyExtractor={item => item}
                />
              );
            }

            const indexX = tables.tabB.div.indexOf(r);
            const data = tables.tabB.medidas[indexX].filter(old);
            return (
              <FlatListt
                data={data}
                renderItem={({ item }) => <Result item={item} />}
                keyExtractor={item => item}
              />
            );
          }
        }
      } else {
        const s = tables.tabB.div;
        for (const r of s) {
          const d = r.indexOf(division);
          if (d !== -1) {
            if (
              (division === 'C-1' && area <= 2000) ||
              (division === 'C-2' && area <= 2000) ||
              (division === 'C-3' && area <= 2000) ||
              (division === 'I-1' && area <= 2000) ||
              (division === 'I-2' && area <= 2000) ||
              (division === 'J-1' && area <= 2000) ||
              (division === 'J-2' && area <= 2000)
            ) {
              const indexX = tables.tabB.div.indexOf(r);
              const data = tables.tabB.medidas[indexX].filter(brigAndAlarm);
              return (
                <FlatListt
                  data={data}
                  renderItem={({ item }) => <Result item={item} />}
                  keyExtractor={item => item}
                />
              );
              // eslint-disable-next-line no-else-return
            } else if (
              (division === 'D-1' && area <= 2000) ||
              (division === 'D-2' && area <= 2000) ||
              (division === 'D-3' && area <= 2000) ||
              (division === 'D-4' && area <= 2000)
            ) {
              const indexX = tables.tabB.div.indexOf(r);
              const data = tables.tabB.medidas[indexX].filter(alarm);
              return (
                <FlatListt
                  data={data}
                  renderItem={({ item }) => <Result item={item} />}
                  keyExtractor={item => item}
                />
              );
            } else if (division === 'G-5' && area <= 5000) {
              const indexX = tables.tabB.div.indexOf(r);
              const data = tables.tabB.medidas[indexX].filter(plan);
              return (
                <FlatListt
                  data={data}
                  renderItem={({ item }) => <Result item={item} />}
                  keyExtractor={item => item}
                />
              );
            } else if (division === 'I-3' && area <= 5000) {
              const indexX = tables.tabB.div.indexOf(r);
              const data = tables.tabB.medidas[indexX].filter(cmar);
              return (
                <FlatListt
                  data={data}
                  renderItem={({ item }) => <Result item={item} />}
                  keyExtractor={item => item}
                />
              );
            }

            const indexX = tables.tabB.div.indexOf(r);
            const data = tables.tabB.medidas[indexX];
            return (
              <FlatListt
                data={data}
                renderItem={({ item }) => <Result item={item} />}
                keyExtractor={item => item}
              />
            );
          }
        }
      }
    } else if (area > 750 && height === '12m < H ≤ 30m') {
      if (situation === 'Construida') {
        const s = tables.tabC.div;
        for (const r of s) {
          const d = r.indexOf(division);
          if (d !== -1) {
            const indexX = tables.tabC.div.indexOf(r);
            const data = tables.tabC.medidas[indexX].filter(old);
            return (
              <FlatListt
                data={data}
                renderItem={({ item }) => <Result item={item} />}
                keyExtractor={item => item}
              />
            );
          }
        }
      } else {
        const s = tables.tabC.div;
        for (const r of s) {
          const d = r.indexOf(division);
          if (d !== -1) {
            const indexX = tables.tabC.div.indexOf(r);
            const data = tables.tabC.medidas[indexX];
            return (
              <FlatListt
                data={data}
                renderItem={({ item }) => <Result item={item} />}
                keyExtractor={item => item}
              />
            );
          }
        }
      }
    } else if (area > 750 && height === '30m < H ≤ 54m') {
      if (situation === 'Construida') {
        const s = tables.tabD.div;
        for (const r of s) {
          const d = r.indexOf(division);
          if (d !== -1) {
            const indexX = tables.tabD.div.indexOf(r);
            const data = tables.tabD.medidas[indexX].filter(old);
            return (
              <FlatListt
                data={data}
                renderItem={({ item }) => <Result item={item} />}
                keyExtractor={item => item}
              />
            );
          }
        }
      } else {
        const s = tables.tabD.div;
        for (const r of s) {
          const d = r.indexOf(division);
          if (d !== -1) {
            const indexX = tables.tabD.div.indexOf(r);
            const data = tables.tabD.medidas[indexX];
            return (
              <FlatListt
                data={data}
                renderItem={({ item }) => <Result item={item} />}
                keyExtractor={item => item}
              />
            );
          }
        }
      }
    } else if (situation === 'Construida') {
      const s = tables.tabE.div;
      for (const r of s) {
        const d = r.indexOf(division);
        if (d !== -1) {
          const indexX = tables.tabE.div.indexOf(r);
          const data = tables.tabE.medidas[indexX].filter(old);
          return (
            <FlatListt
              data={data}
              renderItem={({ item }) => <Result item={item} />}
              keyExtractor={item => item}
            />
          );
        }
      }
    } else {
      const s = tables.tabE.div;
      for (const r of s) {
        const d = r.indexOf(division);
        if (d !== -1) {
          const indexX = tables.tabE.div.indexOf(r);
          const data = tables.tabE.medidas[indexX];
          return (
            <FlatListt
              data={data}
              renderItem={({ item }) => <Result item={item} />}
              keyExtractor={item => item}
            />
          );
        }
      }
    }
  }
  return <Container>{compare()}</Container>;
}

const mapStateToProps = state => ({
  state: state.legislation,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(dispatchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TableResult);
