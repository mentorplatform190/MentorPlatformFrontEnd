import React, { useState, useEffect } from 'react';
import Design from '../Find-My-Mentor/CardDesign'
import Profile from '../../Test';
const All = (props) => {
    let ProfileData = Profile.map((index) => {
        return (
            <Design
            key={index.id}
            name={index.name}
            image={index.image}
            bio={index.Bio}
            price={index.price}
            skills={index.skills}
            position={index.position}
            />
        );
    });
    return (
        <div>{ProfileData}</div>
    )
}
export default All;