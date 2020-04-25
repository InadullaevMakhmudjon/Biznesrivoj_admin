import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

const toState = (html) => {
  const { contentBlocks, entityMap } = htmlToDraft(html);
  const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
  const editorState = EditorState.createWithContent(contentState);
  return editorState;
};

const toHtml = (state) => (draftToHtml(convertToRaw(state.getCurrentContent())));

const types = {
  SET_BODYSTATE_UZ: 'SET_BODYSTATE_UZ',
  SET_BODYSTATE_KR: 'SET_BODYSTATE_KR',
  SET_TITLE_UZ: 'SET_TITLE_UZ',
  SET_TITLE_KR: 'SET_TITLE_KR',
  SET_DESC_UZ: 'SET_DESC_UZ',
  SET_DESC_KR: 'SET_DESC_KR',
  SET_METAFIELDS: 'SET_METAFIELDS',
  SET_SLUG: 'SET_SLUG',
  SET_CATEGORIES: 'SET_CATEGORIES',
  SET_ARTICLE: 'SET_ARTICLE',
};

const map = {
  // eslint-disable-next-line max-len
  [types.SET_BODYSTATE_UZ]: (state, { payload }) => ({ ...state, body_uz: toHtml(payload), bodyUzState: payload }),
  // eslint-disable-next-line max-len
  [types.SET_BODYSTATE_KR]: (state, { payload }) => ({ ...state, body_kr: toHtml(payload), bodyKrState: payload }),
  [types.SET_TITLE_UZ]: (state, { payload }) => ({ ...state, title_uz: payload }),
  [types.SET_TITLE_KR]: (state, { payload }) => ({ ...state, title_kr: payload }),
  [types.SET_DESC_UZ]: (state, { payload }) => ({ ...state, description_uz: payload }),
  [types.SET_DESC_KR]: (state, { payload }) => ({ ...state, description_kr: payload }),
  [types.SET_METAFIELDS]: (state, { payload }) => ({ ...state, metaFields: payload }),
  [types.SET_SLUG]: (state, { payload }) => ({ ...state, slug: payload }),
  [types.SET_CATEGORIES]: (state, { payload }) => ({ ...state, categories: payload }),
  [types.SET_ARTICLE]: (state, { payload }) => ({
    // eslint-disable-next-line max-len
    ...state, ...payload, categories: payload.categories.map(({ id }) => id), bodyUzState: toState(payload.body_uz), bodyKrState: toState(payload.body_kr),
  }),
};

const reducer = (state, action) => (map[action.type] && map[action.type](state, action)) || state;

export { reducer as default, types };
