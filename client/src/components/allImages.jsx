import React from 'react';
import {
  SmallImg,
  SmallImagesContainer,
  SmallImageContainer,
} from '../styledComponents/galleryStyles';

const allImages = ({ images, setMain }) => {
  return (
    <SmallImagesContainer key={images}>
      {images.map((image) => {
        return (
          <SmallImageContainer
            onClick={() => {
              setMain(image);
            }}
            key={Math.random()}
          >
            <SmallImg rel="preload" src={image.img_url} alt="partOfAllImages" key={Math.random()} />
          </SmallImageContainer>
        );
      })}
    </SmallImagesContainer>
  );
};

export default allImages;
