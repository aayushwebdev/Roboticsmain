import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";
import styles from './App.module.css';
import Img1 from '../../images/gallery/1.jpeg';
import Img2 from '../../images/gallery/2.jpeg';
import Img3 from '../../images/gallery/3.jpeg';
import Img4 from '../../images/gallery/4.jpeg';
import Img5 from '../../images/gallery/5.jpeg';
import Img6 from '../../images/gallery/6.jpeg';
import Img7 from '../../images/gallery/7.jpeg';
import Img8 from '../../images/gallery/8.jpeg';
import Img9 from '../../images/gallery/9.jpeg';
import Img10 from '../../images/gallery/10.jpeg';
// import Img11 from '../../images/gallery/11.jpeg';
// import Img12 from '../../images/gallery/12.jpeg';
// import Img13 from '../../images/gallery/13.jpeg';
// import Img14 from '../../images/gallery/14.jpeg';
// import Img15 from '../../images/gallery/15.jpeg';

function App() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen={Img1} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={Img2} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={Img3} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={Img4} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={Img5} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={Img6} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={Img7} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={Img8} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={Img9} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={Img10} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={Img5} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={Img5} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={Img5} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={Img5} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={Img5} />
      )
    }
    
  ];

  return (
    <div className={styles.projects}>
    <div className={styles.heading}>
      <h3>Our Gallery</h3>
      <p>Capturing moments in our gallery</p>
    </div>
      <Carousel
        cards={cards}
        height="400px"
        width="50%"
        margin="4rem auto"
        offset={4}
        showArrows={true}
      />
    </div>
  );
}

export default App;
