import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCake,faCheck,faDirections, faSnowflake } from '@fortawesome/free-solid-svg-icons'
import './quality.css'
import imge from './images/amirali-mirhashemian-EfkMkUXs0fU-unsplash.jpg'
import imge1 from './images/sorin-gheorghita-RSPMPLdrZ8E-unsplash.jpg'
import imge2 from './images/freestocks-bDAgfJ0iRWM-unsplash.jpg'
import imge3 from './images/jason-thompson-KMTRh3xcH1A-unsplash.jpg'


import React from "react";
const Services = () => {
    return (
        <>
            <div className="quality">
                <div className="content">
                    <h4>Production</h4>
                    <div id='awesome'>
                    <FontAwesomeIcon icon={faCake} />
                    </div>
                    <p id='para'>More than 10 years<br/> of experience</p>
                </div>
                <div className="content">
                    <h4>Quality</h4>
                    <div id='awesome'>
                    <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <p id='para'>Our care to select the<br/> best ingredient</p>
                </div>
                <div className="content">
                    <h4 id='freeze'>Cryogenic Freezing</h4>
                    <div id='awesome'>
                    <FontAwesomeIcon icon={faSnowflake} />
                    </div>
                    <p id='para'>Best freezing technology</p>
                </div>
                <div className="content">
                    <h4 id="des">Destination and Logistics</h4>
                    <div id='awesome'>
                    <FontAwesomeIcon icon={faDirections} />
                    </div>
                    <p id='par'>More than 15 sales destination</p>
                </div>
            </div>
            <div className='produce'>
                <div className='prod1'>
                    <div className='imge1'>
                        <img src={imge1}alt='images'/>
                    </div>
                    <div className='duct'>
                        <h2 id='head'>Production</h2>
                        <h1 id='header'>We simply love to focus our attention on the details.</h1>
                        <p id='statement'>
                        Our creative pastry chefs are constantly playing and experimenting with different ingredients, tastes, forms, and decorations in order to provide our customers with a unique cake eating experience. We are able to provide the best results by discussing expectations of cake presentation, taste-testing the desserts during different stages of development, and through our passion to fulfill the consumer's sweet dreams. We supply cakes to the leading frozen food distributors-who stock many great coffee houses and restaurants.
                        </p>
                    </div>
                </div>
                <div className='prod2'>
                    <div className='imge2'>
                        <img src={imge}alt='images'/>
                    </div>
                    <div className='duct'>
                        <h2 id='head'>Quality</h2>
                        <h1 id='header'>We always take exceptional care to select the best ingredients.</h1>
                        <p id='statement'>
                        Our hunger for perfection results in the decision to choose only reliable suppliers offering high-quality raw materials and ingredients with colourful sun-kissed tastes, for the creation of our sweet masterpieces. In cooperation with confectioners, we are selecting the best of the best to make sure that you are satisfied. Using our clever and flexible machines (which are made by BAKON, Foodtools, and Revent manufactures)for cake production. All products are strictly controlled as the company is the bearer of the BRC quality certificates.
                        </p>
                    </div>
                </div>
                <div className='prod3'>
                    <div className='imge3'>
                        <img src={imge2}alt='images'/>
                    </div>
                    <div className='duct'>
                        <h2 id='head'>Cryogenic freezing</h2>
                        <h1 id='header'>Great customer experience and product quality are assured by cryogenic freezing.</h1>
                        <p id='statement'>
                        Protecting the taste and design of the cake during the process of delivering and defrosting, we use safe cryogenic freezing technology to keep the sweet product in its original state. This flavour-friendly method helps us to gratify your taste buds, as well as the taste buds of our beloved customers in more than 25 countries all around the world. The perfection of every cake is confirmed by the final X-ray test.

                        </p>
                    </div>
                </div>
                <div className='prod4'>
                    <div className='imge4'>
                        <img src={imge3}alt='images'/>
                    </div>
                    <div className='duct'>
                        <h2 id='head'>Destination & Logistics</h2>
                        <h1 id='header'>More than 15 sales destinations.</h1>
                        <p id='statement'>
                        In order to enable our customers to immerse themselves in the delicious flavour of our sweets, we have decided to invest in new technologies to make deep-frozen high-quality products for the  Nigerian market. Such technologically improved cakes and pies were, for the first time, successfully introduced to sweet tooths all around the globe in 2009.
                        </p>
                    </div>
                </div>
            </div>
        </>

     );
}
 
export default Services;