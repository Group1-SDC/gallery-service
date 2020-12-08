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
    Axios.get(`/api/images/?id=${itemId}`) // https query
      .then((res) => {
        this.setState({
          images: res.data, // now an array // imagesObj.data[0].imageUrls
          currImg: 0,
        });
        return res.data[0]; // gets sent to next // imagesObj.data[0].imageUrls[0]
      })
      .then((firstImage) => {
        console.log('get images fxn fired');
        console.log(firstImage);
        this.getImages(this.setMain(firstImage, 0));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // [
  //   {img_url: 'urlstring/asldfkugh'},
  //   {},
  //   {},
  //   {},
  //   {}
  // ]

  //   [
  //     {
  //         "imageUrls": [
  //             "http://placeimg.com/640/480/fashion",
  //             "http://placeimg.com/640/480/fashion",
  //             "http://placeimg.com/640/480/fashion",
  //             "http://placeimg.com/640/480/fashion",
  //             "http://placeimg.com/640/480/fashion"
  //         ],
  //         "_id": "5faed97b610fbd1d50ddd72d",
  //         "id": 2,
  //         "__v": 0
  //     }
  // ]

  setMain(image, n) {
    this.setState({
      main: image.img_url,
      currImg: n, // image.id, start at 0
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
    const { images, main } = this.state; // redundant eslint
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
