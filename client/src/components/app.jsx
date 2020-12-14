import React from 'react';
import Axios from 'axios';
import AllImages from './allImages';
import MainImage from './mainImage';
import {
  Container,
  Navigation,
  CodeOff,
  Back,
  Home,
  Sports,
} from '../styledComponents/galleryStyles';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      main: '',
      images: [],
      currImg: '',
    };
    this.setMain = this.setMain.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
    this.getImages = this.getImages.bind(this);
  }

  componentDidMount() {
    if (window.location.pathname !== '/') {
      const arr = window.location.pathname.split('/');
      this.getImages(arr[1]);
    }
  }

  getImages(itemId) {
    Axios.get(`/api/images/?id=${itemId}`) // ?
      .then((res) => {
        this.setState({
          images: res.data,
          currImg: 0,
        });
        return res.data[0];
      })
      .then((firstImage) => {
        this.setMain(firstImage, 0);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  setMain(image, n) {
    this.setState({
      main: image.img_url,
      currImg: n, // only set to 0 on initial render
    });
  }

  nextImage() {
    const { currImg, images } = this.state;

    if (currImg === images.length - 1) {
      this.setState({
        currImg: 0,
        main: images[0].img_url,
      });
    } else {
      this.setState({
        currImg: currImg + 1,
        main: images[currImg + 1].img_url,
      });
    }
  }

  previousImage() {
    const { currImg, images } = this.state;

    if (currImg === 0) {
      this.setState({
        currImg: images.length - 1,
        main: images[images.length - 1].img_url,
      });
    } else {
      this.setState({
        currImg: currImg - 1,
        main: images[currImg - 1].img_url,
      });
    }
  }

  render() {
    const { images, main } = this.state;
    return (
      <Container>
        <Navigation>
          <Back>B A C K</Back>
          <Home>Home</Home>
          /
          <Sports>Football</Sports>
          /
          <Sports>Accessories</Sports>
        </Navigation>
        <CodeOff> -30% CODE GETSHOES</CodeOff>
        <MainImage nextImage={this.nextImage} previousImage={this.previousImage} main={main} />
        <AllImages images={images} setMain={this.setMain} />
      </Container>
    );
  }
}

export default App;
