import React from 'react';
import { DropTarget } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';
import { makeStyles } from '@material-ui/core/styles';
import style from '../../assets/jss/components/targetbox';
import ImgesContainer from './ImgesContainer';

const useStyle = makeStyles(style);

const { FILE } = NativeTypes;

const TargetBox = ({
  canDrop, isOver, connectDropTarget, image,
}) => {
  const classes = useStyle();
  const isActive = canDrop && isOver;
  return connectDropTarget(
    <div className={classes.box}>
      {!isActive && !image && <img className={classes.image} src={`https://${image}`} alt="main" />}

    </div>,
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
