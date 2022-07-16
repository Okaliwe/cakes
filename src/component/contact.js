import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight,} from '@fortawesome/free-solid-svg-icons'
import './contact.css'
const Contact = () => {
    return (  
        <div className="sales">
            <div className='dep'>
                <div>
                    <h3 id='sales'>sales department</h3>
                    <p>Grace ugwu</p>
                    <p>08165232905</p>
                    <a href="okaliwedaniel@gmail.com">email:okaliwedaniel@gmail</a>

                </div>
                <div>
                    <h3 id='sales'>Praise D'cakes</h3>
                    <p id='aso'>Asokoro abuja</p>
                    <p>Nigeria</p>
                </div>
                <p>IC: 27062708</p>
                <p>Anthonia praise,okaliwe daniel,grace ugwu,faithfulness
                chris, oddíl B, vložka 8265</p>
            </div>
            <div className='send'>
                <h3 id='sales'>Send us message</h3>
                <div className='inp'>
                    <input type='text'placeholder="Name"/>
                </div>
                <div className='inp'>
                    <input type='email'placeholder="E-mail"/>
                </div>
                 <div className='inp2'>
                     <input type='text'placeholder="Your message"/>
                 </div>
                 <div className='send'>
                   <a href="#">Send <FontAwesomeIcon icon={faAnglesRight} /></a>
                 </div>
                
            </div>
        </div>
    );
}
 
export default Contact;