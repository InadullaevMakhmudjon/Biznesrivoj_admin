import styled from 'styled-components';
import Select from 'react-select';

export const TableWrapper = styled.div`
  border-radius: 4px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  margin: 10px;
  padding: 0px 10px 10px 10px;
  width:100%;
  margin:auto;
`;

export const TableTitle = styled.h2`
  font-family: Lato, Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.51;
  letter-spacing: normal;
  color: #333333;
  padding: 9px 0px 11px 0px;
  margin-bottom: 0px;
  margin-top: 0px;
`;

export const TableHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const TableActionsWrapper = styled.div`
  width: ${({ isFocussed }) => (isFocussed ? '350px' : '50px')};
  margin-left: auto;
  margin-right: 10px !important;
  transition: all 0.3s ease-in-out 0s;
  display: flex;
`;

export const OverlayRight = styled.div`
    width:${({ open }) => (open ? '430px' : '0px')};
    height:100%;
    position: fixed;
    height: 100%;
    top: 60px;
    right: 0;
    z-index: 100;
    box-shadow: rgba(0, 0, 0, 0.9) 10px 15px 9px 6px;
    background 0.2s ease
    top: 0;
    bottom:0;
    position:fixed;
    overflow-y:scroll;
    overflow-x:hidden;
`;

export const AddButtonStyled = styled.button`
  background: #4eb1f4;
  padding: unset;
  border-width: 0;
  border-color: none;
  color: #fff;
  border-radius: 3px;
  font-family: Lato, Arial, Helvetica, sans-serif;
  font-weight: 600;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: unset;
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  position: relative;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  background-color: rgb(255, 255, 255);
  color: rgb(170, 170, 170);
  justify-content: flex-end;

  & span {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    fill: rgb(173, 173, 173);
    z-index: 101;
  }

  & span svg {
    width: 15px;
    height: 15px;
  }

  & > i {
    position: absolute;
    right: 20px;
    top: 50%;
    width: 15px;
    height: 15px;
    transform: translateY(-50%);
    fill: rgb(173, 173, 173);
    pointer-events: none;

    position: absolute;
    right: 20px;
    font-size: 20px;
    z-index: 1;
  }
`;

export const InputStyled = styled.input`
  font-family: Lato, Arial, Helvetica, sans-serif;
  font-weight: 600;
  width: ${({ isFocussed }) => (isFocussed ? '100%' : '10px')};
  color: rgb(170, 170, 170);
  padding: 10px 34px 10px 11px;
  background: none;
  border-width: 1px;
  border-color: ${({ isFocussed }) => (isFocussed ? '#4eb1f4' : 'rgba(0,0,0,0)')};
  border-image: initial;
  border-radius: 5px;
  transition: all 0.3s ease-in-out 0s;
  outline: unset;
`;

export const SelectWrapper = styled.div`
  display:flex;
`;

export const LabelStyled = styled.label``;

export const SelectStyled = styled(Select)`
  width:100px;
`;
