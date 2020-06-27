import styled from 'styled-components';

export const ButtonStyled = styled.button`
    position: relative;
    width:150px;
    background: #212529;
    cursor: pointer;
    color: #fff;
    padding: 10px 0;
    text-transform: uppercase;
    font-size: 12px;
    border:1px solid #212529;
    margin-right:20px;

    ${({ customStyles }) => customStyles && customStyles}

    ${({ outline }) => outline && `
        background:#fff;
        color:#212529;
        border:1px solid #212529;
    `}

    &:hover{
        cursor:pointer;
    }
`;
