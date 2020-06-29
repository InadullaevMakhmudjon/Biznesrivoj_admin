import styled from 'styled-components';


export const TableHeaderStyled = styled.th`
  padding: 10px 20px;
  background: #f5f6f7;
  border: 1px solid #dfdfdf;
  font-family: Lato, Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #333333;
  text-align: center;
  position:relative;
  border-top:0px;

  &::before {
    position: absolute;
    right: 15px;
    top: 16px;
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;

    ${({ isSorted }) => (isSorted === 'sort-asc' ? 'border-bottom: 5px solid #22543d;' : '')}
    ${({ isSorted }) => (isSorted === 'sort-desc' ? 'border-top: 5px solid #22543d;' : '')}
  }
`;
// eslint-disable-next-line import/prefer-default-export
export const TableContainer = styled.div`
  table {
    table-layout: fixed;
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 20px;
  }


  table td {
    padding: 10px 20px;
    border: 1px solid #dfdfdf;
    background-color: #fff;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #333333;
    font-family: Lato, Arial, Helvetica, sans-serif;
    word-wrap: break-word;
  }

  table td:nth-child(2) {
    text-align: center;
    background-color: #f5f6f7;
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #333333;
    font-family: Lato, Arial, Helvetica, sans-serif;
  }

  table td:nth-child(1) {
    background-color: #f5f6f7;
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #333333;
    font-family: Lato, Arial, Helvetica, sans-serif;
  }

  table thead {
    background-color: #333;
    color: #fdfdfd;
  }

  table thead tr {
    position: relative;
  }

  table tbody {
    overflow: auto;
    width: 100%;
    height: 300px;
  }

  table tbody tr {
    cursor: pointer;
  }
`;
