import styled from 'styled-components';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Select from 'react-select';

export const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right:20px;
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
export const InputStyled = styled.input`
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.01) 1px 3px 3px 0px;
  padding: 12px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(222, 222, 222);
  border-image: initial;
  border-radius: 4px;
  font-family: Lato, Arial, Helvetica, sans-serif;
`;


export const TextAreaStyled = styled(TextareaAutosize)`
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.01) 1px 3px 3px 0px;
  padding: 12px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(222, 222, 222);
  border-image: initial;
  border-radius: 4px;
  font-family: Lato, Arial, Helvetica, sans-serif;
`;


export const ImageWrapper = styled.div`
  display:flex;
`;

export const ImageStyled = styled.img`
  width:100px;
  height:100px;
  object-fit:contain;
`;

export const ImageInputStyled = styled.input`
  
`;


export const SelectWrapper = styled.div`
    display:flex;
    align-items:baseline;

`;

export const SelectStyled = styled(Select)`
    width:120px;
    margin-left:10px;
`;
