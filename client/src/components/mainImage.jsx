/**
 * This legacy code is not the work of Luke Hatcher.
 * Please see the README.md
 */

import React from 'react';
import {
  ButtonRight, ButtonLeft, ButtonImg, MainImg,
} from '../styledComponents/galleryStyles';

const mainImage = ({ previousImage, nextImage, main }) => {
  return (
    <div>
      <ButtonLeft rel="preload" type="button" onClick={previousImage}><ButtonImg src="https://s3-us-west-2.amazonaws.com/adidas.gallery/leftArrowTran.png" alt="leftArrow" /></ButtonLeft>
      <MainImg src={main} alt="DisplaysMainImg" />
      <ButtonRight rel="preload" type="button" onClick={nextImage}><ButtonImg src="https://s3-us-west-2.amazonaws.com/adidas.gallery/rightArrowTran.png" alt="rightArrow" /></ButtonRight>
    </div>
  );
};

export default mainImage;
