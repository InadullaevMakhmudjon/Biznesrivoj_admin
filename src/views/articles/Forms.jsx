import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import InputBase from '@material-ui/core/InputBase';
import classNames from 'classnames';
import { getAll } from '../../redux/modules/categories/actions';
import { types } from './hooks/useArticle';
import styles from '../../assets/jss/views/forms';

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 300,
      width: 250,
    },
  },
};

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const style = makeStyles(styles);

const Form = ({ dispatch, article }) => {
  const classes = style();
  const dispatchAction = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  useEffect(() => { dispatchAction(getAll()); }, []);

  const handleChangeCategory = (e) => {
    dispatch({ type: types.SET_CATEGORIES, payload: e.target.value });
  };

  const getDisplayNames = (ids) => ids.map((itemId) => {
    const find = categories.find(({ id }) => id === itemId);
    return find ? find.name : '';
  });

  const dispatcher = (type, { target: { value: payload } }) => dispatch({ type, payload });

  return (
    <>
      <Grid container>
        <Grid container alignItems="center">
          <Grid item xs={4} className={classes.gridItem}>
            <TextareaAutosize
              rows={1}
              onChange={(e) => dispatcher(types.SET_SLUG, e)}
              value={article.slug}
              placeholder="Slug"
              className={classNames('border', classes.gridText)}
            />
          </Grid>
          <Grid item xs={4} className={classes.gridItem}>
            <TextareaAutosize
              className={classNames('border', classes.gridText)}
              rows={1}
              onChange={(e) => dispatcher(types.SET_METAFIELDS, e)}
              value={article.metaFields}
              placeholder="Metafields"
            />
          </Grid>
          <Grid item xs={4} className={classes.gridItem}>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Select category</InputLabel>
              <Select
                labelId="demo-mutiple-checkbox-label"
                id="demo-mutiple-checkbox"
                multiple
                value={article.categories}
                onChange={handleChangeCategory}
                input={<BootstrapInput />}
                renderValue={(selected) => getDisplayNames(selected).join(', ')}
                MenuProps={MenuProps}
              >
                {categories.map(({ id, name }) => (
                  <MenuItem key={name} value={id}>
                    <Checkbox checked={article.categories.indexOf(id) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

          </Grid>
        </Grid>
        <Grid item xs={6} className={classes.formPart}>
          <TextareaAutosize
            className={classNames('border', classes.gridText)}
            onChange={(e) => dispatcher(types.SET_TITLE_UZ, e)}
            value={article.title_uz}
            rows={1}
            placeholder="Title uz"
          />
          <TextareaAutosize
            className={classNames('border', classes.gridText)}
            rows={3}
            onChange={(e) => dispatcher(types.SET_DESC_UZ, e)}
            value={article.description_uz}
            placeholder="Description uz"
          />
          <Editor
            editorState={article.bodyUzState}
            placeholder="Body uz"
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            // eslint-disable-next-line max-len
            onEditorStateChange={(value) => dispatcher(types.SET_BODYSTATE_UZ, { target: { value } })}
          />
        </Grid>
        <Grid item xs={6} className={classes.formPart}>
          <TextareaAutosize
            className={classNames('border', classes.gridText)}
            rows={1}
            onChange={(e) => dispatcher(types.SET_TITLE_KR, e)}
            value={article.title_kr}
            placeholder="Title kr"
          />
          <TextareaAutosize
            className={classNames('border', classes.gridText)}
            rows={3}
            onChange={(e) => dispatcher(types.SET_DESC_KR, e)}
            value={article.description_kr}
            placeholder="Description kr"
          />
          <Editor
            editorState={article.bodyKrState}
            placeholder="Body kr"
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            // eslint-disable-next-line max-len
            onEditorStateChange={(value) => dispatcher(types.SET_BODYSTATE_KR, { target: { value } })}
          />
        </Grid>
      </Grid>
    </>
  );
};

Form.propTypes = {
  dispatch: PropTypes.func.isRequired,
  article: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Form;
