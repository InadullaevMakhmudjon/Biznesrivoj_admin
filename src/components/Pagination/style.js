import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 500px;
  margin-left: auto;
`;

export const ButtonStyled = styled.button`
  margin-right: 5px;
  margin-left: 5px;
  color: #000;
  border-radius: 5px;
  background: #fff;
  border: 1px solid #212529;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  width: 30px;
  font-weight: 700;

  &:disabled {
    border-color: #999;
    color: #999;
    cursor: not-allowed;
  }
`;
