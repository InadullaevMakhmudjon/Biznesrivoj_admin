import styled from 'styled-components';


export const EditContainer = styled.div`
    width:100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelStyled = styled.label`
  font-family: Lato, Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: rgb(51, 51, 51);
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  display: flex;
  padding: 25px 0px 12px;
  text-transform: capitalize;
`;
export const InputStyled = styled.textarea`
  width: 100%;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.01) 1px 3px 3px 0px;
  padding: 12px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(222, 222, 222);
  border-image: initial;
  border-radius: 5px;
  font-family: Lato, Arial, Helvetica, sans-serif;
`;
