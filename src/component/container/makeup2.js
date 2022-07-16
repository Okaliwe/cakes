import { faSnowflake,faShippingFast} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Makeup2 = () => {
    return (
        <div id ="willis">
             <h2>Honey cake</h2>
            <p id='po'>Honey</p>
            <div className='digital'>
            <FontAwesomeIcon icon={faSnowflake} /> <label>-20c</label>
            </div> 
           <div className='digital2'>
           <FontAwesomeIcon icon={faShippingFast}/> <label>5 hours</label>
           </div>
        </div>
      );
}
 
export default Makeup2;