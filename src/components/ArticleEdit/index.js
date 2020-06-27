import React from 'react';


import {
  EditContainer, InputWrapper, LabelStyled, InputStyled, TextAreaStyled,
} from './style';

const labels = {
  slug: 'Slug',
  title: 'Title',
  desc: 'Description',
  metafields: 'Metafields',
  body: 'Main Text',
};

const ArticleEdit = ({
  slug,
  title,
  metafields,
  description,
  body,
}) => (
  <EditContainer>
    <InputWrapper>
      <LabelStyled>{labels.slug}</LabelStyled>
      <InputStyled
        disabled
        value={slug}
      />
    </InputWrapper>
    <InputWrapper>
      <LabelStyled>{labels.title}</LabelStyled>
      <TextAreaStyled
        placeholder="Article title"
        rowsMin={3}
        value={title}
        onChange={(e) => {}}
      />
    </InputWrapper>
    <InputWrapper>
      <LabelStyled>{labels.metafields}</LabelStyled>
      <InputStyled
        type="text"
        value={metafields}
        onChange={(e) => {}}
      />
    </InputWrapper>

    <InputWrapper>
      <LabelStyled>{labels.desc}</LabelStyled>
      <InputStyled
        type="text"
        value={description}
        onChange={(e) => {}}
      />
    </InputWrapper>

    <InputWrapper>
      <LabelStyled>{labels.body}</LabelStyled>
      {/* <InputStyled
        type="text"
        value={body}
        onChange={(e) => {}}
      /> */}
    </InputWrapper>

  </EditContainer>
);

export default ArticleEdit;
