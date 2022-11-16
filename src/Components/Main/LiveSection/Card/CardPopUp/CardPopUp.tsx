import './CardPopUp.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { LiveScore } from '../../../../../interfaces/LiveScoreInterface';
import { cardFunctions } from '../../../../../functions/CardFunctions';

const PopupCardCorers = ({ goals } : { goals:LiveScore }) => (
    <Popup className='popUp' trigger={<img className="scorers-icon" src="https://i.ibb.co/yp992z3/football.png" alt="" />
    } position="right center">
        <div className='popup-content'>
            {/* <p>Home Scorers</p>/ */}
        </div>
    </Popup>
);

export default PopupCardCorers;