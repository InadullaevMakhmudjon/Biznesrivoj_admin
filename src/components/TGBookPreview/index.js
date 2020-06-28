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
  point,
  descriptionCyrillic,
  descriptionLatin,
  lang,
  price,
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
    <pre>
      <strong>Narxi : {price}</strong>
    </pre>
  </TGPreviewContainer>
);

export default TGBookPreview;
