import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import langOptions from "../../config/langConfig";
import labelConfig from "../../config/labelConfig";

import Spinner from "../../components/Spinner";

import {
  UpdateArticleContainer,
  HeadingStyled,
  SelectStyled,
  SelectWrapper,
  LabelStyled,
  WrapperStyled,
} from "./style";
import {
  tgSingleGiftSelector,
  isGiftLoadingSelector,
} from "../../redux/selectors/giftsSelector";
import {
  getSingleGift,
  updateGift,
} from "../../redux/modules/tg-single-gift/tgSingleGiftAction";
import TGGiftEditable from "../../components/TGGiftEditable";
import TGGiftPreview from "../../components/TGGIftPreview";
import Button from "../../components/Button";

const TGGiftEdit = () => {
  const { giftId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [lang, setLang] = useState(langOptions[0]);

  const [giftDetails, setGiftDetails] = useState(null);
  const [cyrillic, setCyrillic] = useState("");
  const [latin, setLatin] = useState("");

  const isLoading = useSelector((state) => isGiftLoadingSelector(state));

  const gift = useSelector((state) => tgSingleGiftSelector(state));

  useEffect(() => {
    if (giftId) {
      dispatch(getSingleGift(giftId));
    }
  }, [dispatch, giftId]);

  useEffect(() => {
    if (gift) {
      setGiftDetails(gift);
      setCyrillic(gift.description_kr);
      setLatin(gift.description_uz);
      setLang(langOptions[0]);
    }
  }, [gift]);

  if (isLoading) {
    return <Spinner />;
  }

  const handleImageChange = (url) => {
    const clone = _.cloneDeep(giftDetails);
    setGiftDetails({
      ...clone,
      image: [url],
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
      bonus: e.target.value,
    });
  };

  const handleSave = () => {
    dispatch(
      updateGift(
        {
          title_kr: giftDetails.title_kr,
          title_lat: giftDetails.title_uz,
          description_kr: cyrillic,
          description_lat: latin,
          image: giftDetails.image,
          bonus: giftDetails.bonus,
        },
        giftDetails.id,
      ),
    );
  };

  return (
    <UpdateArticleContainer>
      <HeadingStyled>Update TG Gift</HeadingStyled>
      <SelectWrapper>
        <LabelStyled>Choose Lang</LabelStyled>
        <SelectStyled
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
              images={giftDetails.image}
              bonus={giftDetails.bonus}
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
              bonus={giftDetails.bonus}
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

export default TGGiftEdit;
