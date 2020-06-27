import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ArticleEditable from '../../components/ArticleEdit';
import { get } from '../../redux/modules/article/actions';
import { articleSelector } from '../../redux/selectors/articlesSelector';

import mockArticle from '../../mock-data/article';

import langOptions from '../../config/langConfig';

import {
  UpdateArticleContainer,
  HeadingStyled,
  SelectStyled,
  SelectWrapper,
  LabelStyled,
  EditContainer,
  PreviewContainer,
  WrapperStyled,
} from './style';


const EditArticle = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [articleDetails, setArticleDetails] = useState(mockArticle);
  const [lang, setLang] = useState('uz');
  const article = useSelector((state) => articleSelector(state));

  useEffect(() => dispatch(get(slug)), [dispatch]);
  useEffect(() => {
    if (article) {
      setArticleDetails(article);
    }
  }, [article]);

  return (
    <UpdateArticleContainer>
      <HeadingStyled>Update Article</HeadingStyled>
      <SelectWrapper>
        <LabelStyled>
          Choose Lang
        </LabelStyled>
        <SelectStyled
          className="basic-single"
          classNamePrefix="select"
          defaultValue={langOptions[0]}
          onChange={(e) => setLang(e.value)}
          isClearable={false}
          name="lang"
          options={langOptions}
        />
      </SelectWrapper>

      <WrapperStyled>
        <ArticleEditable
          slug={articleDetails.slug}
          title={articleDetails[`title_${lang}`]}
          metafields={articleDetails[`metafields_${lang}`]}
          description={articleDetails[`description_${lang}`]}
          body={articleDetails[`body_${lang}`]}
          handleChangeTitle={() => {}}
          handleChangeMetafields={() => {}}
          handleChangeDescription={() => {}}
        />
        <PreviewContainer />
      </WrapperStyled>
    </UpdateArticleContainer>
  );
};


export default EditArticle;
