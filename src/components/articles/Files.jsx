import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import PropTypes from 'prop-types';
import TargetBox from './TargetBox';
import File from '../../api/Files';

const Files = ({ main, elem }) => {
  const [mainImage, setMainImage] = useState('');
  const [images, setImages] = useState([]);

  const handleFileDrop = (item, monitor) => {
    if (monitor) {
      const file = monitor.getItem().files;
      const formData = new FormData();
      formData.append('file', file[0]);
      File.upload(formData).then(({ data }) => {
        if (main) setMainImage(data.url);
        else setImages(images.concat(data.url));
      });
    }
  };

  return (
    <DndProvider backend={Backend}>
      <TargetBox onDrop={handleFileDrop} mainImage={mainImage} main={main} images={images} />
    </DndProvider>
  );
};

Files.propTypes = {
  main: PropTypes.bool,
};

Files.defaultProps = {
  main: false,
};

export default Files;
