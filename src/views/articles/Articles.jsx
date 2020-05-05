import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { useHistory, useRouteMatch } from 'react-router-dom';
import ArticleTable from '../../components/articles/ArticleTable';
import style from '../../assets/jss/views/articles';

const styles = makeStyles(style);

const Article = ({ children }) => {
  const history = useHistory();
  const { isExact } = useRouteMatch();
  const classes = styles();

  if (isExact) {
    return (
      <>
        <div className={classes.btnContainer}>
          <Button variant="outlined" onClick={() => { history.push('/articles/create'); }}>Create</Button>
        </div>
        <ArticleTable />
      </>
    );
  }
  return children;
};

Article.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Article;
