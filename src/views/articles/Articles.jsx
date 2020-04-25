import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import ArticleTable from '../../components/articles/ArticleTable';
import style from '../../assets/jss/views/articles';

const styles = makeStyles(style);

export default () => {
  const history = useHistory();
  const classes = styles();
  return (
    <>
      <div className={classes.btnContainer}>
        <Button variant="outlined" onClick={() => { history.push('/articles/create'); }}>Create</Button>
      </div>
      <ArticleTable />
    </>
  );
};
