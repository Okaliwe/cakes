import { faSnowflake,faShippingFast} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Makeup7 = () => {
    return (
        <div>
             <h2>Muffin Spice & Raisins</h2>
            <p id='po'></p>
            <div className='digital'>
            <FontAwesomeIcon icon={faSnowflake} /> <label>-17c</label>
            </div> 
           <div className='digital2'>
           <FontAwesomeIcon icon={faShippingFast}/> <label>12 hours</label>
           </div>
        </div>
      );
}
 
export default Makeup7;