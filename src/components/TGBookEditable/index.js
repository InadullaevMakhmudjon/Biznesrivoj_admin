import React from "react";
import PropTypes from 'prop-types';
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
  handleDescriptionChangeCyrillic,
  handleDescriptionChangeLatin,
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
        <TextAreaStyled
          id="latin"
          value={descriptionLatin}
          onChange={(e) => handleDescriptionChangeLatin(e.target.value)}
        />
      )}

      {lang === "kr" && (
        <TextAreaStyled
          id="cyrillic"
          value={descriptionCyrillic}
          onChange={(e) => handleDescriptionChangeCyrillic(e.target.value)}
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
    {price !== undefined && (
    <InputWrapper>
      <LabelStyled>{labelConfig.price}</LabelStyled>
      <InputStyled
        placeholder="Book price"
        value={price}
        onChange={(e) => handleChangePrice(e)}
      />
    </InputWrapper>
    )}
  </EditContainer>
);


TGBookEditable.defaultProps = {
  title: '',
  handleChangeTitle: () => {},
  images: [],
  handleImageChange: () => {},
  point: 0,
  price: undefined,
  handleChangePrice: () => {},
  handleChangeBonus: () => {},
  lang: 'uz',
  descriptionCyrillic: '',
  descriptionLatin: '',
  handleDescriptionChangeCyrillic: () => {},
  handleDescriptionChangeLatin: () => {},
};

TGBookEditable.propTypes = {
  title: PropTypes.string,
  handleChangeTitle: PropTypes.func,
  images: PropTypes.arrayOf(PropTypes.any),
  handleImageChange: PropTypes.func,
  point: PropTypes.number,
  price: PropTypes.number,
  handleChangePrice: PropTypes.func,
  handleChangeBonus: PropTypes.func,
  lang: PropTypes.string,
  descriptionCyrillic: PropTypes.string,
  descriptionLatin: PropTypes.string,
  handleDescriptionChangeCyrillic: PropTypes.func,
  handleDescriptionChangeLatin: PropTypes.func,
};

export default TGBookEditable;
