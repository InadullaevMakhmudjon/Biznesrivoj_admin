import React from "react";

import { createMarkup } from "../../utils";

import {
  TGPreviewContainer,
  HeadingStyled,
  ImageStyled,
  DescriptionStyled,
} from "./style";

const TGBookPreview = ({
  title,
  images,
  description,
  bonus,
  descriptionCyrillic,
  descriptionLatin,
  lang,
}) => (
  <TGPreviewContainer>
    {images.map((image) => <ImageStyled src={image} alt="title" />)}
    <HeadingStyled>{title}</HeadingStyled>
    {lang === "uz" && (
      <DescriptionStyled
        dangerouslySetInnerHTML={createMarkup(descriptionLatin)}
      />
    )}
    {lang === "kr" && (
      <DescriptionStyled
        dangerouslySetInnerHTML={createMarkup(descriptionCyrillic)}
      />
    )}
    <strong>{bonus}</strong>
  </TGPreviewContainer>
);

export default TGBookPreview;
