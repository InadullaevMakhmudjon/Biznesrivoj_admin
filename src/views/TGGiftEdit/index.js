import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import langOptions from "../../config/langConfig";

import Spinner from "../../components/Spinner";
import EditableComponent from '../../components/EditableComponent';

import {
  tgSingleGiftSelector,
  isGiftLoadingSelector,
} from "../../redux/selectors/giftsSelector";
import {
  getSingleGift,
  updateGift,
} from "../../redux/modules/tg-single-gift/tgSingleGiftAction";


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

  function handleDescriptionChangeCyrillic(e) {
    setCyrillic(e);
  }

  function handleDescriptionChangeLatin(e) {
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
      updateGift(
        {
          title_kr: giftDetails.title_kr,
          title_lat: giftDetails.title_uz,
          description_kr: cyrillic,
          description_lat: latin,
          image: giftDetails.images[0],
          point: giftDetails.point,
        },
        giftDetails.id,
      ),
    );
  };

  const handleCancel = () => {
    history.push("/telegram-gifts");
  };


  return (
    <EditableComponent
      pageTitle="TG Book Update"
      defaultLang={langOptions[0]}
      details={giftDetails}
      latin={latin}
      cyrillic={cyrillic}
      lang={lang}
      setLang={setLang}
      handleImageChange={handleImageChange}
      handleTitleChange={handleTitleChange}
      handleDescriptionChangeCyrillic={handleDescriptionChangeCyrillic}
      handleDescriptionChangeLatin={handleDescriptionChangeLatin}
      handleChangeBonus={handleChangeBonus}
      handleSave={handleSave}
      handleCancel={handleCancel}
    />
  );
};

export default TGGiftEdit;
