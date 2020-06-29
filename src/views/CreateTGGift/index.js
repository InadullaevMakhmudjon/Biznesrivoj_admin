import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import langOptions from "../../config/langConfig";
import labelConfig from "../../config/labelConfig";

import { createTGGift } from "../../redux/modules/tg-single-gift/tgSingleGiftAction";

import TGGiftPreview from "../../components/TGGIftPreview";
import TGBookEditable from "../../components/TGBookEditable";
import Button from "../../components/Button";

import {
  UpdateArticleContainer,
  HeadingStyled,
  SelectStyled,
  SelectWrapper,
  LabelStyled,
  WrapperStyled,
} from "./style";
import TGGiftEditable from "../../components/TGGiftEditable";

const TGGiftCreate = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [lang, setLang] = useState(langOptions[0]);

  const [giftDetails, setGiftDetails] = useState({
    title_kr: '',
    title_uz: '',
    images: [],
    point: 0,
  });
  const [cyrillic, setCyrillic] = useState("");
  const [latin, setLatin] = useState("");


  const handleImageChange = (url) => {
    const clone = _.cloneDeep(giftDetails);
    console.log(url, 'urk');
    setGiftDetails({
      ...clone,
      images: [url],
    });
  };

  const handleTitleChange = (e) => {
    const clone = _.cloneDeep(giftDetails);
    setGiftDetails({
      ...clone,
      [`title_${lang.value}`]: e.target.value,
    });
  };

  function handelDescriptionChangeCyrillic(e) {
    setCyrillic(e);
  }

  function handelDescriptionChangeLatin(e) {
    setLatin(e);
  }

  const handleChangeBonus = (e) => {
    const clone = _.cloneDeep(giftDetails);
    setGiftDetails({
      ...clone,
      point: e.target.value,
    });
  };


  const handleSave = () => {
    dispatch(
      createTGGift(
        {
          title_kr: giftDetails.title_kr,
          title_lat: giftDetails.title_uz,
          description_kr: cyrillic,
          description_lat: latin,
          image: giftDetails.images[0],
          point: giftDetails.point,
          price: giftDetails.price,
        },
        history,
      ),
    );
  };

  console.log(giftDetails, 'details');

  return (
    <UpdateArticleContainer>
      <HeadingStyled>Create TG Gift</HeadingStyled>
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
        {giftDetails && (
          <>
            <TGGiftEditable
              title={giftDetails[`title_${lang.value}`]}
              lang={lang.value}
              descriptionCyrillic={cyrillic}
              descriptionLatin={latin}
              images={giftDetails.images}
              point={giftDetails.point}
              handleImageChange={handleImageChange}
              handleChangeTitle={handleTitleChange}
              handelDescriptionChangeLatin={handelDescriptionChangeLatin}
              handelDescriptionChangeCyrillic={handelDescriptionChangeCyrillic}
              handleChangeBonus={handleChangeBonus}
            />
            <TGGiftPreview
              title={giftDetails[`title_${lang.value}`]}
              images={giftDetails.images}
              lang={lang.value}
              descriptionCyrillic={cyrillic}
              descriptionLatin={latin}
              point={giftDetails.point}
            />
          </>
        )}
      </WrapperStyled>
      <Button
        outline
        onClick={() => history.push("/telegram-gifts")}
        label={labelConfig.cancel}
      />
      <Button onClick={() => handleSave()} label={labelConfig.save} />
    </UpdateArticleContainer>
  );
};

export default TGGiftCreate;
