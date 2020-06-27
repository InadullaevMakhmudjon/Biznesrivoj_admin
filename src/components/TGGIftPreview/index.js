import React from 'react';

import { createMarkup } from '../../utils';

import {
  TGPreviewContainer,
  HeadingStyled,
  ImageStyled,
  DescriptionStyled,
} from './style';

const TGGiftPreview = ({
  title, image, description, bonus, descriptionCyrillic,
  descriptionLatin, lang,
}) => (
  <TGPreviewContainer>
    <ImageStyled src={`https://${image}`} alt="title" />
    <HeadingStyled>{title}</HeadingStyled>
    {lang === 'uz' && <DescriptionStyled dangerouslySetInnerHTML={createMarkup(descriptionLatin)} />}
    {lang === 'kr' && <DescriptionStyled dangerouslySetInnerHTML={createMarkup(descriptionCyrillic)} />}
    <strong>{bonus}</strong>
  </TGPreviewContainer>
);

export default TGGiftPreview;
