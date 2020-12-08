import React from 'react';
import { SmallImg, SmallImagesContainer, SmallImageContainer } from '../styledComponents/galleryStyles';

const allImages = (props) => {
  return (
    <SmallImagesContainer key={props.images}>
      {props.images.map((image) => {
        return (
          <SmallImageContainer
            onClick={() => {
              props.setMain(image);
            }}
            key={Math.random()}
          >
            <SmallImg rel="preload" src={image.url} alt="partOfAllImages" key={image.id} />
          </SmallImageContainer>
        );
      })}
    </SmallImagesContainer>
  );
};

export default allImages;
