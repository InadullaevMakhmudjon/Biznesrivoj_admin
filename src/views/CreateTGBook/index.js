import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import _ from "lodash";
import {
  createTGBook,
} from "../../redux/modules/tg-single-book/tgSingleBookActions";
import TGBookEditable from "../../components/TGBookEditable";
import Button from "../../components/Button";
import langOptions from "../../config/langConfig";
import labelConfig from "../../config/labelConfig";
import { deliveryOptions } from '../../config/tgConfigs';

import {
  UpdateArticleContainer,
  HeadingStyled,
  SelectStyled,
  SelectWrapper,
  LabelStyled,
  WrapperStyled,
} from "./style";


const TGBookCreate = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [lang, setLang] = useState(langOptions[0]);
  const [deliveryType, setDeliveryType] = useState(deliveryOptions[0]);

  const [bookDetails, setBookDetails] = useState({
    title_kr: '',
    title_uz: '',
    images: [],
    point: 0,
    price: 0,
  });
  const [cyrillic, setCyrillic] = useState("");
  const [latin, setLatin] = useState("");


  const handleImageChange = (url) => {
    const clone = _.cloneDeep(bookDetails);
    setBookDetails({
      ...clone,
      images: clone.images.concat(url),
    });
  };

  const handleTitleChange = (e) => {
    const clone = _.cloneDeep(bookDetails);
    setBookDetails({
      ...clone,
      [`title_${lang.value}`]: e.target.value,
    });
  };

  function handleDescriptionChangeCyrillic(e) {
    setCyrillic(e);
  }

  function handleDescriptionChangeLatin(e) {
    setLatin(e);
  }

  const handleChangeBonus = (e) => {
    const clone = _.cloneDeep(bookDetails);
    setBookDetails({
      ...clone,
      point: e.target.value,
    });
  };

  const handleChangePrice = (e) => {
    const clone = _.cloneDeep(bookDetails);
    setBookDetails({
      ...clone,
      price: e.target.value,
    });
  };

  const handleSave = () => {
    dispatch(
      createTGBook(
        {
          title_kr: bookDetails.title_kr,
          title_lat: bookDetails.title_uz,
          description_kr: cyrillic,
          description_lat: latin,
          images: bookDetails.images,
          point: bookDetails.point,
          price: bookDetails.price,
          deliveryTypeId: deliveryType.value,
        },
        history,
      ),
    );
  };

  return (
    <UpdateArticleContainer>
      <HeadingStyled>Create TG Book</HeadingStyled>
      <SelectWrapper>
        <LabelStyled>Choose Lang</LabelStyled>
        <SelectStyled
          className="basic-single"
          classNamePrefix="select"
          defaultValue={langOptions[0]}
          onChange={(e) => setLang(e)}
          isClearable={false}
          name="lang"
          options={langOptions}
        />
      </SelectWrapper>

      <WrapperStyled>
        {bookDetails && (
        <TGBookEditable
          title={bookDetails[`title_${lang.value}`]}
          lang={lang.value}
          descriptionCyrillic={cyrillic}
          descriptionLatin={latin}
          images={bookDetails.images}
          point={bookDetails.point}
          price={bookDetails.price}
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
        onClick={() => history.push("/telegram-books")}
        label={labelConfig.cancel}
      />
      <Button onClick={() => handleSave()} label={labelConfig.save} />
    </UpdateArticleContainer>
  );
};

export default TGBookCreate;
