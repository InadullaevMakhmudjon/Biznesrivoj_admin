import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import style from '../../assets/jss/components/images-container';

const useStyle = makeStyles(style);

const copyToClipboard = (str) => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  alert('Copied');
};

const ImgesContainer = ({ images }) => {
  const classes = useStyle();
  return (
    <Grid container>
      {
        images.map((image) => (
          <Grid item xs={2} key={image} onClick={() => copyToClipboard(`http://${image}`)}>
            <div className={classes.container}>
              <img className={classes.image} src={`http://${image}`} alt="child" />
            </div>
          </Grid>
        ))
    }
    </Grid>
  );
};

ImgesContainer.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImgesContainer;
