import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import langOptions from "../../config/langConfig";
import { deliveryOptions } from '../../config/tgConfigs';

import Spinner from "../../components/Spinner";
import EditableComponent from '../../components/EditableComponent';

import {
  tgSingleBookSelector,
  isLoadingSingleBookSelector,
} from "../../redux/selectors/booksSelector";
import {
  getSingleBook,
  updateBook,
} from "../../redux/modules/tg-single-book/tgSingleBookActions";

const TGBookEdit = () => {
  const { bookId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [lang, setLang] = useState(langOptions[0]);
  const [deliveryType, setDeliveryType] = useState(deliveryOptions[0]);

  const [bookDetails, setBookDetails] = useState(null);
  const [cyrillic, setCyrillic] = useState("");
  const [latin, setLatin] = useState("");

  const isLoading = useSelector((state) => isLoadingSingleBookSelector(state));

  const book = useSelector((state) => tgSingleBookSelector(state));

  useEffect(() => {
    if (bookId) {
      dispatch(getSingleBook(bookId));
    }
  }, [dispatch, bookId]);


  useEffect(() => {
    if (book) {
      setBookDetails(book);
      setCyrillic(book.description_kr);
      setLatin(book.description_uz);
      setLang(langOptions[0]);
      setDeliveryType(deliveryOptions.filter((item) => item.value === book.deliveryTypeId));
    }
  }, [book]);

  if (isLoading) {
    return <Spinner />;
  }

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
      updateBook(
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
        bookDetails.id,
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
      langOptions={langOptions}
      details={bookDetails}
      latin={latin}
      cyrillic={cyrillic}
      lang={lang}
      setLang={setLang}
      deliveryType={deliveryType}
      setDeliveryType={setDeliveryType}
      handleImageChange={handleImageChange}
      handleTitleChange={handleTitleChange}
      handleDescriptionChangeCyrillic={handleDescriptionChangeCyrillic}
      handleDescriptionChangeLatin={handleDescriptionChangeLatin}
      handleChangeBonus={handleChangeBonus}
      handleChangePrice={handleChangePrice}
      handleSave={handleSave}
      handleCancel={handleCancel}
    />
  );
};

export default TGBookEdit;
