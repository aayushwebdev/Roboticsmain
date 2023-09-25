import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";
import styles from './App.module.css';
import Img1 from '../../images/quadcopter 2.jpg';

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
        <Card imagen={Img1} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={Img1} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={Img1} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={Img1} />
      )
    }
  ];
  return (
    <div className={styles.projects}>
    <div className={styles.heading}>
      <h3>Our Projects</h3>
      <p>Turning ideas into reality</p>
    </div>
      <Carousel
        cards={cards}
        height="500px"
        width="80%"
        margin="4rem auto"
        offset={4}
        showArrows={false}
      />
    </div>
  );
}

export default App;
