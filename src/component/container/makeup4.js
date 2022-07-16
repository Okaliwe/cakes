import { faSnowflake,faShippingFast} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Makeup4 = () => {
    return (
        <div>
             <h2>Cup Cake icing High</h2>
            <p id='po'>Cream,vanila, choco strips</p>
            <div className='digital'>
            <FontAwesomeIcon icon={faSnowflake} /> <label>-17c</label>
            </div> 
           <div className='digital2'>
           <FontAwesomeIcon icon={faShippingFast}/> <label>12 hours</label>
           </div>
        </div>
      );
}
 
export default Makeup4;