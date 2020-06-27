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
  getSingleBook,
  updateBook,
} from "../../redux/modules/tg-single-book/tgSingleBookActions";
import TGBookEditable from "../../components/TGBookEditable";
import TGBookPreview from "../../components/TGBookPreview";
import Button from "../../components/Button";

const TGBookEdit = () => {
  const { bookId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [lang, setLang] = useState(langOptions[0]);

  const [bookDetails, setBookDetails] = useState(null);
  const [cyrillic, setCyrillic] = useState("");
  const [latin, setLatin] = useState("");

  const isLoading = useSelector((state) => isLoadingSingleBookSelector(state));

  const book = useSelector((state) => tgSingleBookSelector(state));

  useEffect(() => {
    if (!book) {
      dispatch(getSingleBook(bookId));
    }
  }, [dispatch, bookId]);

  useEffect(() => {
    if (book) {
      setBookDetails(book);
      setCyrillic(book.description_kr);
      setLatin(book.description_uz);
      setLang(langOptions[0]);
    }
  }, [book]);

  if (isLoading) {
    return <Spinner />;
  }

  const handleImageChange = (url) => {
    const clone = _.cloneDeep(bookDetails);
    setBookDetails({
      ...clone,
      images: [...bookDetails.images, url],
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
      bonus: e.target.value,
    });
  };

  const handleSave = () => {
    console.log(bookDetails, latin, cyrillic);
  };

  console.log(bookDetails, 'details');
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
              bonus={bookDetails.bonus}
              handleImageChange={handleImageChange}
              handleChangeTitle={handleTitleChange}
              handelDescriptionChangeLatin={handelDescriptionChangeLatin}
              handelDescriptionChangeCyrillic={handelDescriptionChangeCyrillic}
              handleChangeBonus={handleChangeBonus}
            />
            <TGBookPreview
              title={bookDetails[`title_${lang.value}`]}
              images={bookDetails.images}
              lang={lang.value}
              descriptionCyrillic={cyrillic}
              descriptionLatin={latin}
              bonus={bookDetails.bonus}
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

export default TGBookEdit;
