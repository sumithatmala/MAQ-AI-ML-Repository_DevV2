import React from 'react';
import BasicTabs from './BasicTabs';
const SpecializationsPannel = (props) => {
    return (
        <div className='ml-5 my-5' style={{position:"relative"}}>
            <h1>{props.items.title}</h1>
            <p>
            {props.items.description}
            </p>
            {/* <Horizontal /> */}
            <BasicTabs items={props.items.filteredData}/>
        </div>
    );
}

export default SpecializationsPannel;
