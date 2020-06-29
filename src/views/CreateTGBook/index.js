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
  tgSingleBookSelector,
  isLoadingSingleBookSelector,
} from "../../redux/selectors/booksSelector";
import {
  createTGBook,
} from "../../redux/modules/tg-single-book/tgSingleBookActions";
import TGBookEditable from "../../components/TGBookEditable";
import TGBookPreview from "../../components/TGBookPreview";
import Button from "../../components/Button";

const TGBookCreate = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [lang, setLang] = useState(langOptions[0]);

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

  function handelDescriptionChangeCyrillic(e) {
    setCyrillic(e);
  }

  function handelDescriptionChangeLatin(e) {
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
        },
        history,
      ),
    );
  };

  return (
    <UpdateArticleContainer>
      <HeadingStyled>Update TG Book</HeadingStyled>
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
          <>
            <TGBookEditable
              title={bookDetails[`title_${lang.value}`]}
              lang={lang.value}
              descriptionCyrillic={cyrillic}
              descriptionLatin={latin}
              images={bookDetails.images}
              point={bookDetails.point}
              price={bookDetails.price}
              handleImageChange={handleImageChange}
              handleChangeTitle={handleTitleChange}
              handelDescriptionChangeLatin={handelDescriptionChangeLatin}
              handelDescriptionChangeCyrillic={handelDescriptionChangeCyrillic}
              handleChangeBonus={handleChangeBonus}
              handleChangePrice={handleChangePrice}
            />
            <TGBookPreview
              title={bookDetails[`title_${lang.value}`]}
              images={bookDetails.images}
              lang={lang.value}
              descriptionCyrillic={cyrillic}
              descriptionLatin={latin}
              point={bookDetails.point}
              price={bookDetails.price}
            />
          </>
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
