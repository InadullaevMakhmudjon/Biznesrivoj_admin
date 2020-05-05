import React from 'react';
import { DropTarget } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';
import { makeStyles } from '@material-ui/core/styles';
import style from '../../assets/jss/components/targetbox';
import ImgesContainer from './ImgesContainer';

const useStyle = makeStyles(style);

const { FILE } = NativeTypes;

const TargetBox = ({
  canDrop, isOver, connectDropTarget, mainImage, main, images,
}) => {
  const classes = useStyle();
  const isActive = canDrop && isOver;
  return connectDropTarget(
    (main && mainImage) ? (
      <div className={classes.box}>
        <img className={classes.image} src={`http://${mainImage}`} alt="main" />
      </div>
    )
      : (
        <div className={classes.box} style={{ background: isActive ? 'rgba(156, 217, 107, 0.8)' : '' }}>
          {
            (mainImage && images.length) ? '' : (
              <span>
                {main ? 'Main image' : 'Storage'}
                <br />
                {`${isActive ? 'Release' : 'Drag and drop here'}`}
              </span>
            )
          }
          {
            images.length ? <ImgesContainer images={images} /> : ''
          }
        </div>
      ),
  );
};

export default DropTarget(
  () => [FILE],
  {
    drop(props, monitor) {
      if (props.onDrop) {
        props.onDrop(props, monitor);
      }
    },
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }),
)(TargetBox);
