import { faSnowflake,faShippingFast} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './makeup.css'

const Makeup = () => {
    return (
        <div id='willis'>
            <h2>vanilla cake</h2>
            <p id='po'>vanilla,white chocolate</p>
            <div className='digital'>
            <FontAwesomeIcon icon={faSnowflake} /> <label>-18c</label>
            </div> 
           <div className='digital2'>
           <FontAwesomeIcon icon={faShippingFast}/> <label>12 hours</label>
           </div>
        </div>
      );
} 
export default Makeup;