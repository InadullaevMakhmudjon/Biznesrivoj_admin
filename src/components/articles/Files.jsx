import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import PropTypes from 'prop-types';
import DropTarget from '../DropTarget';
import File from '../../api/Files';

const Files = ({
  setImage, images,
}) => {
  const handleUpload = (file) => {
    const formData = new FormData();
    formData.append('file', file);
    File.upload(formData).then(({ data }) => {
      setImage(data.url);
    });
  };

  const handleFileDrop = (item, monitor) => {
    if (monitor) {
      const { files } = monitor.getItem();
      files.map((file) => handleUpload(file));
    }
  };

  const handleSelectFile = (e) => {
    const { files } = e.target;
    Object.entries(files).map(([key, value]) => handleUpload(value));
  };


  return (
    <DndProvider backend={Backend}>
      <DropTarget onDrop={handleFileDrop} handleSelectFile={handleSelectFile} images={images} />
    </DndProvider>
  );
};

Files.propTypes = {
  setImage: PropTypes.func,
  image: PropTypes.string,
};

Files.defaultProps = {
  setImage: () => {},
  image: '',
};

export default Files;
