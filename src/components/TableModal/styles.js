import styled from 'styled-components';

export const Tablew = styled.table`
  width: 100%;
  /*text-align: center;*/
  border-right: 0;
  border-radius: 4px;
  text-align: center;

  tr,
  td {
    background: none;
    padding: 8px 0;
    color: #9a9da3;
    font-size: 16px;
    transition: background 0.3s;

    &:hover:not(#info) {
      cursor: pointer;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      border: 1px solid #9a9da3;
    }
  }
  td:not(#info) {
    color: #fff;
    padding-right: 25px;
    padding-left: 25px;
  }
`;

/*

      td:not(#oi) {
        border-right: none;
      }




import styled from 'styled-components';

export const Tablew = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  border: 1px solid #eee;

  thead {
    border: 1px solid #eee;
  }
  tr {
    border: 1px solid #eee;
    border-radius: 4px;
    padding: 5px 30px 5px;

    span {
      display: flex;
      align-items: stretch;
      border-radius: 4px;
      padding: 5px 30px 5px;
      color: #9a9da3;
      font-size: 16px;
      transition: background 0.3s;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
        border: 1px solid #9a9da3;
      }
    }
  }
  td {
    border-radius: 4px;
    padding: 5px 30px 5px;
  }
`;




 */
