import React from 'react';
import Featurebox from './Featurebox';
import featureimage from '../images/feature_1.png';
import featureimage1 from '../images/feature_2.png';
import featureimage2 from '../images/feature_3.png';

function Feature() {
  return (
    <div id='features'>
        <div className='a-container'>
            <Featurebox img={featureimage1} title='Handholding Support' desc='UdyamWell provides personalized handholding support to help you through every stage of your business journey.'/>
            <Featurebox img={featureimage} title='Learning Platform & Community Support' desc='UdyamWell is an edtech platform that provides a wealth of resources to help entrepreneurs and business owners.'/>
            <Featurebox img={featureimage2} title='Partner Connect' desc='UdyamWell has a vast network of partners to help you with a range of services.'/>
        </div>
    </div>
  )
}

export default Feature