import styled from 'styled-components';
import Select from 'react-select';

export const UpdateArticleContainer = styled.div`
    border-radius: 4px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    margin: 10px;
    padding: 10px 20px;
    max-width:800px;
    margin:auto;
    
`;

export const WrapperStyled = styled.div`
    display:flex;   
    margin-bottom:20px;
`;


export const HeadingStyled = styled.h1`

`;


export const EditContainer = styled.div`
    width:50%;
`;


export const PreviewContainer = styled.div`
    width:50%;
`;

export const SelectWrapper = styled.div`
    display:flex;
    align-items:center;
`;

export const LabelStyled = styled.label`
    font-weight:bold;
    margin-right:10px;
`;

export const SelectStyled = styled(Select)`
    width:120px;
`;
