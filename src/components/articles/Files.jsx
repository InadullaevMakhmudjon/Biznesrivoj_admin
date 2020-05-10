import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import PropTypes from 'prop-types';
import TargetBox from './TargetBox';
import File from '../../api/Files';

const Files = ({ main, setImage, image }) => {
  const [images, setImages] = useState([]);

  const handleFileDrop = (item, monitor) => {
    if (monitor) {
      const file = monitor.getItem().files;
      const formData = new FormData();
      formData.append('file', file[0]);
      File.upload(formData).then(({ data }) => {
        if (main) {
          setImage(data.url);
        } else setImages(images.concat(data.url));
      });
    }
  };

  return (
    <DndProvider backend={Backend}>
      <TargetBox onDrop={handleFileDrop} mainImage={image} main={main} images={images} />
    </DndProvider>
  );
};

Files.propTypes = {
  main: PropTypes.bool,
  setImage: PropTypes.func,
  image: PropTypes.string,
};

Files.defaultProps = {
  main: false,
  setImage: () => {},
  image: '',
};

export default Files;
