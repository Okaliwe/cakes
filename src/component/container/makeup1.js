import { faSnowflake,faShippingFast} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Makeup1 = () => {
    return (
        <div id ="willis">
            <h2>Strawberry Bavarois</h2>
            <p id='po'>strawberry bavarois,strawberries,white chocolate</p>
            <div className='digital'>
            <FontAwesomeIcon icon={faSnowflake} /> <label>-18<sup>0</sup>c</label>
            </div> 
           <div className='digital2'>
           <FontAwesomeIcon icon={faShippingFast}/> <label>12 hours</label>
           </div>
        </div>
      );
}
export default Makeup1;