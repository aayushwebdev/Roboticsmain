import './Events.css';
import Technosearch from '../../images/technosearch.png';
import Img1 from "../../images/makeathon.png";
import Automax from "../../images/automax23.png";

const Upcoming = () => {
    return (
        <div className="cardContainer">
            <div className='card'>
                <div className='imgBox'>
                    <img src={Automax} alt="" />
                </div>
                <div className='cardContent'>
                    <h3>Automax</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adispiscinf elti quaerat dolorbushs bitae fungit enim erpundiandar</p>
                </div>
            </div>
            <div className='card'>
                <div className='imgBox'>
                    <img src={Technosearch} alt="" />
                </div>
                <div className='cardContent'>
                    <h3>Technosearch</h3>
                    <h1>Coming Soon...</h1>
                </div>
            </div>

        </div>
    );
};

export default Upcoming;