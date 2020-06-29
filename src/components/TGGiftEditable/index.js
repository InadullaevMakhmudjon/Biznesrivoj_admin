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

const TGGiftEditable = ({
  title,
  handleChangeTitle,
  images,
  handleImageChange,
  point,
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
    <Files setImage={handleImageChange} images={images} />
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
  </EditContainer>
);

TGGiftEditable.defaultProps = {
  title: '',
  handleChangeTitle: () => {},
  images: [],
  handleImageChange: () => {},
  point: 0,
  handleChangeBonus: () => {},
  lang: 'uz',
  descriptionCyrillic: '',
  descriptionLatin: '',
  handleDescriptionChangeCyrillic: () => {},
  handleDescriptionChangeLatin: () => {},
};

TGGiftEditable.propTypes = {
  title: PropTypes.string,
  handleChangeTitle: PropTypes.func,
  images: PropTypes.arrayOf(PropTypes.any),
  handleImageChange: PropTypes.func,
  point: PropTypes.number,
  handleChangeBonus: PropTypes.func,
  lang: PropTypes.string,
  descriptionCyrillic: PropTypes.string,
  descriptionLatin: PropTypes.string,
  handleDescriptionChangeCyrillic: PropTypes.func,
  handleDescriptionChangeLatin: PropTypes.func,
};

export default TGGiftEditable;
