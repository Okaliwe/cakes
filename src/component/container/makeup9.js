import { faSnowflake,faShippingFast} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Makeup9 = () => {
    return (
        <div>
             <h2>Lemon cake with Vanilla</h2>
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
 
export default Makeup9;