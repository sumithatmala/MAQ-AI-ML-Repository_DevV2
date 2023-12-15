import React from 'react';
// import { Horizontal } from './Horizontal';
import BasicTabs from './BasicTabs';
const ArtificialIntelligence = () => {
    return (
        <div className='ml-5 my-5' style={{position:"relative"}}>
            <h1>Artificial Intelligence</h1>
            <p>
            Artificial Intelligence is a process of categorizing a given set of data into classes, It can be performed on both structured or unstructured data. The process starts with predicting the class of given data points. The classes are often referred to as target, label or categories.
            </p>
            {/* <Horizontal /> */}
            <BasicTabs />
        </div>
    );
}

export default ArtificialIntelligence;
