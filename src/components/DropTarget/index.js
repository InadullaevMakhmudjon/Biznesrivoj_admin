import React from "react";
import { DropTarget } from "react-dnd";
import { NativeTypes } from "react-dnd-html5-backend";

import Masonry from "react-masonry-css";
import {
  TargetContainer,
  ImageStyled,
  InputWrapper,
  InputFileStyled,
  LabelStyled,
} from "./style";

const { FILE } = NativeTypes;

const TargetBox = ({
  canDrop,
  isOver,
  connectDropTarget,
  images,
  handleSelectFile,
}) => {
  const isActive = canDrop && isOver;
  return connectDropTarget(
    <div>
      <TargetContainer isActive={isActive}>
        {!isActive &&
          images.length &&
          images.map((image, index) => (
            <ImageStyled key={image + index} src={image} alt="main" />
          ))}
        {(isActive || !images) && <p>Drag and Drop the images</p>}
      </TargetContainer>
      <InputWrapper>
        <LabelStyled>Insert image</LabelStyled>
        <InputFileStyled
          type="file"
          accept="image/*"
          multiple
          onChange={handleSelectFile}
        />
      </InputWrapper>
    </div>
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
  })
)(TargetBox);
