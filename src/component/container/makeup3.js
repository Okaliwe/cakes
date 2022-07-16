import { faSnowflake,faShippingFast} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Makeup3 = () => {
    return (
        <div id="willis">
             <h2>Chocolate Cake Prague High</h2>
            <p id='po'>Cream, chocolate, choco strips</p>
            <div className='digital'>
            <FontAwesomeIcon icon={faSnowflake} /> <label>-20c</label>
            </div> 
           <div className='digital2'>
           <FontAwesomeIcon icon={faShippingFast}/> <label>5 hours</label>
           </div>
        </div>
      );
}
 
export default Makeup3;