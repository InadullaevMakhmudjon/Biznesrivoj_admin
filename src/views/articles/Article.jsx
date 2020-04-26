import React, { useReducer, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { EditorState } from 'draft-js';
import Forms from './Forms';
import { create, update } from '../../redux/modules/article/actions';
import useArticle, { types } from './hooks/useArticle';
import Artcles from '../../api/Articles';

const defaultArticle = {
  body_uz: '',
  body_kr: '',
  title_uz: '',
  title_kr: '',
  description_uz: '',
  description_kr: '',
  metaFields: '',
  slug: '',
  categories: [],
  bodyUzState: EditorState.createEmpty(),
  bodyKrState: EditorState.createEmpty(),
};

export default () => {
  const dispatchAction = useDispatch();
  const [article, dispatch] = useReducer(useArticle, defaultArticle);
  const history = useHistory();

  const { slug } = useParams();

  const handleSave = () => {
    const action = slug ? update : create;
    dispatchAction(action({ ...article, bodyUzState: '', bodyKrState: '' }, slug));
    history.goBack();
  };

  useEffect(() => {
    if (window.location.pathname.includes('edit')) {
      Artcles.get(slug)
        .then(({ data: payload }) => dispatch({ type: types.SET_ARTICLE, payload }))
        .catch(() => history.goBack());
    }
  }, []);

  return (
    <>
      <Container>
        <Button variant="outlined" style={{ margin: '5px' }} onClick={() => { history.goBack(); }}>Back</Button>
        <Button variant="outlined" style={{ margin: '5px' }} onClick={() => { handleSave(); }}>Save</Button>
      </Container>
      <Forms dispatch={dispatch} article={article} />
    </>
  );
};
