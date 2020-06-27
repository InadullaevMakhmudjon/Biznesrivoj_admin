import styled from 'styled-components';

export const TargetContainer = styled.div`
    margin-top: 20px;
    border: 1px solid gray;
    height: 250px;
    padding: 2px;
    text-align: center;
    width: 100%;
    border-radius: 5px;

    display:flex;
    align-items:center;
    justify-content:center;

    ${({ isActive }) => isActive && `
        border-color:#0088cc;

    `}
`;

export const ImageStyled = styled.img`
    width:100%;
    height:100%;
    object-fit:contain;
`;

export const InputWrapper = styled.div`
    position: relative;
    width: 150px;
    text-align: center;
    margin-top:20px;    
`;

export const LabelStyled = styled.label`
    position: relative;
    z-index: 0;
    display: inline-block;
    width: 100%;
    background: #212529;
    cursor: pointer;
    color: #fff;
    padding: 10px 0;
    text-transform:uppercase;
    font-size:12px;
`;

export const InputFileStyled = styled.input`
    display: inline-block;
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 50px;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
`;
