import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import Files from "../articles/Files";

import labelConfig from "../../config/labelConfig";

import {
  EditContainer,
  InputWrapper,
  LabelStyled,
  InputStyled,
  TextAreaStyled,
} from "./style";

const TGBookEditable = ({
  title,
  handleChangeTitle,
  images,
  handleImageChange,
  point,
  price,
  handleChangePrice,
  handleChangeBonus,
  lang,
  descriptionCyrillic,
  descriptionLatin,
  handelDescriptionChangeCyrillic,
  handelDescriptionChangeLatin,
}) => (
  <EditContainer>
    <InputWrapper>
      <LabelStyled>{labelConfig.title}</LabelStyled>
      <TextAreaStyled
        placeholder="Gift title"
        rowsMin={3}
        value={title}
        onChange={(e) => handleChangeTitle(e)}
      />
    </InputWrapper>
    <Files setImage={handleImageChange} images={images} multiple />
    <InputWrapper>
      <LabelStyled>{labelConfig.desc}</LabelStyled>
      {lang === "uz" && (
        <ReactQuill
          id="latin"
          theme="snow"
          value={descriptionLatin}
          onChange={(e) => handelDescriptionChangeLatin(e)}
        />
      )}

      {lang === "kr" && (
        <ReactQuill
          id="cyrillic"
          theme="snow"
          value={descriptionCyrillic}
          onChange={(e) => handelDescriptionChangeCyrillic(e)}
        />
      )}
    </InputWrapper>
    <InputWrapper>
      <LabelStyled>{labelConfig.bonus}</LabelStyled>
      <InputStyled
        placeholder="Bonus point"
        value={point}
        onChange={(e) => handleChangeBonus(e)}
      />
    </InputWrapper>
    <InputWrapper>
      <LabelStyled>{labelConfig.price}</LabelStyled>
      <InputStyled
        placeholder="Book price"
        value={price}
        onChange={(e) => handleChangePrice(e)}
      />
    </InputWrapper>
  </EditContainer>
);

export default TGBookEditable;
