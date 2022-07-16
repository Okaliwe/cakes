import "./carousel.css";
import Carousel from 'react-bootstrap/Carousel'
import img1 from './images/natallia-nagorniak-tA3sJ4u09eU-unsplash (1).jpg'
import img2 from './images/gaelle-marcel-wPOV0W7ykxE-unsplash.jpg'
import img3 from './images/naz-khan-3nO8wQbVDM8-unsplash.jpg'
import img4 from './images/taisiia-shestopal-mX6HWtVRY0M-unsplash.jpg'
import img5 from './images/side-view-shawarma-with-fried-potatoes-board-cookware.jpg'
const Caro = () => {
    return ( 
        <div className="carous">
        <Carousel variant="white">
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={img4}
            alt="Third slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={img5}
            alt="Third slide"
        />
        </Carousel.Item>
         </Carousel>
        </div>

     );
}
 
export default Caro;