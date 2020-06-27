import React from 'react';
import { DropTarget } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';

import {
  TargetContainer, ImageStyled, InputWrapper, InputFileStyled, LabelStyled,
} from './style';

const { FILE } = NativeTypes;

const TargetBox = ({
  canDrop, isOver, connectDropTarget, image, handleSelectFile,
}) => {
  const isActive = canDrop && isOver;
  return connectDropTarget(
    <div>
      <TargetContainer isActive={isActive}>
        {!isActive && image && <ImageStyled src={`https://${image}`} alt="main" />}
        {(isActive || !image) && <p>Drag and Drop the images</p>}
      </TargetContainer>
      <InputWrapper>
        <LabelStyled>Insert image</LabelStyled>
        <InputFileStyled type="file" accept="image/*" onChange={handleSelectFile} />
      </InputWrapper>
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
