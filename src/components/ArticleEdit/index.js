import React from 'react';

import {
  EditContainer, InputWrapper, LabelStyled, InputStyled,
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
        type="text"
        disabled
        value={slug}
      />
    </InputWrapper>
    <InputWrapper>
      <LabelStyled>{labels.title}</LabelStyled>
      <InputStyled
        type="text"
        value={title}
        onChange={(e) => handleChangeTitle(e.target.value)}
      />
    </InputWrapper>
    <InputWrapper>
      <LabelStyled>{labels.metafields}</LabelStyled>
      <InputStyled
        type="text"
        value={metafields}
        onChange={(e) => handleChangeMetafields(e.target.value)}
      />
    </InputWrapper>

    <InputWrapper>
      <LabelStyled>{labels.desc}</LabelStyled>
      <InputStyled
        type="text"
        value={description}
        onChange={(e) => handleChangeDescription(e.target.value)}
      />
    </InputWrapper>

    <InputWrapper>
      <LabelStyled>{labels.body}</LabelStyled>
      <InputStyled
        type="text"
        value={body}
        onChange={(e) => handleChangeDescription(e.target.value)}
      />
    </InputWrapper>

  </EditContainer>
);

export default ArticleEdit;
