import React from "react";
import PropTypes from 'prop-types';
import labelConfig from "../../config/labelConfig";

import {
  UpdateArticleContainer,
  HeadingStyled,
  SelectStyled,
  SelectWrapper,
  LabelStyled,
  WrapperStyled,
} from "./style";

import TGBookEditable from "../TGBookEditable";

import Button from "../Button";

const EditableComponent = ({
  pageTitle,
  defaultLang,
  langOptions,
  details,
  latin,
  cyrillic,
  handleImageChange,
  handleTitleChange,
  handleDescriptionChangeCyrillic,
  handleDescriptionChangeLatin,
  handleChangeBonus,
  handleChangePrice,
  handleSave,
  handleCancel,
  lang,
  setLang,
  deliveryType,
  setDeliveryType,
}) => (
  <UpdateArticleContainer>
    <HeadingStyled>{pageTitle}</HeadingStyled>
    <SelectWrapper>
      <LabelStyled>Choose Lang</LabelStyled>
      <SelectStyled
        className="basic-single"
        classNamePrefix="select"
        defaultValue={defaultLang}
        onChange={(e) => setLang(e)}
        isClearable={false}
        name="lang"
        options={langOptions}
      />
    </SelectWrapper>
    <WrapperStyled>
      {details && (
        <TGBookEditable
          title={details[`title_${lang.value}`]}
          lang={lang.value}
          descriptionCyrillic={cyrillic}
          descriptionLatin={latin}
          images={details.images}
          point={details.point}
          price={details.price}
          deliveryType={deliveryType}
          setDeliveryType={setDeliveryType}
          handleImageChange={handleImageChange}
          handleChangeTitle={handleTitleChange}
          handleDescriptionChangeLatin={handleDescriptionChangeLatin}
          handleDescriptionChangeCyrillic={handleDescriptionChangeCyrillic}
          handleChangeBonus={handleChangeBonus}
          handleChangePrice={handleChangePrice}
        />
      )}
    </WrapperStyled>
    <Button
      outline
      onClick={() => handleCancel()}
      label={labelConfig.cancel}
    />
    <Button onClick={() => handleSave()} label={labelConfig.save} />
  </UpdateArticleContainer>
);

EditableComponent.defaultProps = {
  pageTitle: '',
  defaultLang: {},
  langOptions: [],
  details: {},
  latin: '',
  cyrillic: '',
  lang: {},
  setLang: () => {},
  deliveryType: null,
  setDeliveryType: () => {},
  handleImageChange: () => {},
  handleTitleChange: () => {},
  handleDescriptionChangeCyrillic: () => {},
  handleDescriptionChangeLatin: () => {},
  handleChangeBonus: () => {},
  handleChangePrice: () => {},
  handleSave: () => {},
  handleCancel: () => {},
};

EditableComponent.propTypes = {
  pageTitle: PropTypes.string,
  defaultLang: PropTypes.objectOf(PropTypes.any),
  langOptions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  details: PropTypes.objectOf(PropTypes.any),
  latin: PropTypes.string,
  cyrillic: PropTypes.string,
  lang: PropTypes.objectOf(PropTypes.any),
  setLang: PropTypes.func,
  deliveryType: PropTypes.objectOf(PropTypes.any),
  setDeliveryType: PropTypes.func,
  handleImageChange: PropTypes.func,
  handleTitleChange: PropTypes.func,
  handleDescriptionChangeCyrillic: PropTypes.func,
  handleDescriptionChangeLatin: PropTypes.func,
  handleChangeBonus: PropTypes.func,
  handleChangePrice: PropTypes.func,
  handleSave: PropTypes.func,
  handleCancel: PropTypes.func,
};

export default EditableComponent;
