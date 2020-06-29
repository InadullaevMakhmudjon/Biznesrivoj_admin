import React from "react";

import { createMarkup } from "../../utils";

import {
  TGPreviewContainer,
  HeadingStyled,
  ImageStyled,
  DescriptionStyled,
} from "./style";

const TGGiftPreview = ({
  title,
  images,
  description,
  point,
  descriptionCyrillic,
  descriptionLatin,
  lang,
}) => (
  <TGPreviewContainer>
    {images.map((image, index) => (
      <ImageStyled key={image + index} src={image} alt="title" />
    ))}
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
    <strong>{point}</strong>
  </TGPreviewContainer>
);

export default TGGiftPreview;
