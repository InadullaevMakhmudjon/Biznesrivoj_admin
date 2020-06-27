import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import PropTypes from 'prop-types';
import DropTarget from '../DropTarget';
import File from '../../api/Files';

const Files = ({ setImage, image }) => {
  const handleUpload = (file) => {
    const formData = new FormData();
    formData.append('file', file);
    File.upload(formData).then(({ data }) => {
      setImage(data.url);
    });
  };

  const handleFileDrop = (item, monitor) => {
    if (monitor) {
      const file = monitor.getItem().files;
      handleUpload(file[0]);
    }
  };

  const handleSelectFile = (e) => {
    handleUpload(e.target.files[0]);
  };


  return (
    <DndProvider backend={Backend}>
      <DropTarget onDrop={handleFileDrop} handleSelectFile={handleSelectFile} image={image} />
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
