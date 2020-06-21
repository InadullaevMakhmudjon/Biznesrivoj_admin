import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get } from '../../redux/modules/article/actions';
import { articleSelector } from '../../redux/selectors/articlesSelector';

import {
  UpdateArticleContainer,
  HeadingStyled,
  EditContainer,
  PreviewContainer,
  WrapperStyled,
} from './style';

const EditArticle = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [articleDetails, setArticleDetails] = useState(null);
  const article = useSelector((state) => articleSelector(state));

  console.log(article);

  useEffect(() => dispatch(get(slug)), [dispatch]);
  useEffect(() => {
    if (article) {
      setArticleDetails(article);
    }
  }, [article]);
  console.log(articleDetails, 'details');
  return (
    <UpdateArticleContainer>
      <HeadingStyled>Update Article</HeadingStyled>
      <WrapperStyled>
        <EditContainer />
        <PreviewContainer />
      </WrapperStyled>
    </UpdateArticleContainer>
  );
};


export default EditArticle;
