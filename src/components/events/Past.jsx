import './Events.css';
import Autoshow from '../../images/autoshow.png';
import Robofiesta from '../../images/robofiesta.png';
import Automax from '../../images/automax22.png';
import Makeathon from '../../images/makeathon.png'

const Past = () => {
    return (
        <div className="cardContainer">
            <div className='card'>
                <div className='imgBox'>
                    <img src={Automax} alt="" />
                </div>
                <div className='cardContent'>
                    <h3>Automax</h3>
                    <h1>Closed</h1>
                </div>
            </div>
            <div className='card'>
                <div className='imgBox'>
                    <img src={Autoshow} alt="" />
                </div>
                <div className='cardContent'>
                    <h3>Autoshow</h3>
                    <h1>Closed!</h1>
                </div>
            </div>
            <div className='card'>
                <div className='imgBox'>
                    <img src={Robofiesta} alt="" />
                </div>
                <div className='cardContent'>
                    <h3>Robofiesta</h3>
                    <h1>Closed</h1>
                </div>
            </div>
            <div className='card'>
                <div className='imgBox'>
                    <img src={Makeathon} alt="" />
                </div>
                <div className='cardContent'>
                    <h3>Makeathon</h3>
                    <h1>Closed</h1>
                </div>
            </div>
        </div>
    );
};

export default Past;