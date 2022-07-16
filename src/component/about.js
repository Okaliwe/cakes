import React from "react";
import './about.css'
import image1 from './images/henry-co-nMQY_xvzl6w-unsplash.jpg'
import image2 from './images/element5-digital-RPjyNMHDrFY-unsplash.jpg'
const About = () => {
    return ( 
        <>
            <div className="tobz">
                <div className="dans">
                    <div className="davs">
                        <h2 id="pres">Presence</h2>
                        <h1 id="aim">Our aim is to continue enriching the global sweet market.</h1>
                    </div>
                    <div>
                        <p id="rat">
                        Involving the team of pastry chefs and talented management board, we are collectively concentrating our effort on the further expansion of the cakes, as well as the company. Over the course of the production, we have been challenging every single step. In search for a unique experience, our sweet team has been sharing and discussing the tastes and knowledge with our quality-demanding food experts from numerous cafés, restaurants, and hotels worldwide. We are trying to smoothly build  a healthy, medium-sized company; placing great emphasis on creating and maintaining warm relationships with our B2B business partners.
                        </p>
                    </div>
                </div>
          </div>
          <div className="nancy2">
            <img src={image2} alt='images'/>
          </div>
          <div className="nancy">
                <div id="im">
                    <img src={image1} alt='images'/>
                </div>
                <div className="jel">
                    <h2 id="valu">Values</h2>
                    <h1 id="bel">We believe in<br/> uniqueness.</h1>
                    <p id="phil">Our philosophy is baked from the freshest of  ingredients. We have combined systematic and inspiring collaboration with our employees by using the best raw materials and machines, together with customers’ expectations, high technological approaches to producing sweets, and our own aspirations as well as the respect for quality and safety.  We believe that the results will always be absolutely unique.</p>
                </div>
          </div>
          <div>
            <h3 id="bus">Business data</h3>
            <div className="fig">
                <div className="tonia">
                   <div >
                        <h3 id="call">10</h3>
                        <h3 id ='call'>Years</h3>
                        <p id="puk">delivering the unique experience to all passionate cake lovers.</p>
                   </div>
                   <div>
                        <h3 id="call">50</h3>
                        <h3 id="call">employees</h3>
                        <p id="puk">delivering the unique experience to all passionate cake lovers.</p>
                   </div>
                </div>
                <div className="tonia">
                   <div>
                        <h3 id="call">7500000</h3>
                        <h3 id="call">Kg</h3>
                        <p id="puk">of cakes adored, eaten and appreciated by customers.</p>
                   </div>
                   <div>
                        <h3 id="call">25</h3>
                        <h3 id="call">destinations</h3>
                        <p id="puk">all around the world taking pleasure in our cakes.
                        </p>
                   </div>
                </div>
            </div>
          </div>
       </>
       
     );
}
 
export default About;