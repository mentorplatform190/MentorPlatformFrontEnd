import React from 'react';
import Design from '../Find-My-Mentor/CardDesign'
import Profile from '../../Test';
const DataScience = (props) => {
    const result = Profile.filter(data => data.category === 'Data-Science');
    let ProfileData =  result.map((index) => {
        return (
            <Design
            name={index.name}
            bio={index.Bio}
            price={index.price}
            skills={index.skills}
            position={index.position}/>
        );
    });
    return (
        <div>{ProfileData}</div>
    )
}
export default DataScience;