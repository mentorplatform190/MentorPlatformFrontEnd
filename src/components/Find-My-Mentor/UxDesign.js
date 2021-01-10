import React, { useState, useEffect } from 'react';
import Design from '../Find-My-Mentor/CardDesign'
import Profile from '../../Test';
const UxDesign = (props) => {
    console.log(Profile);
    let ProfileData = Profile.map((order) => {
        return (
            <Design />
        );
    });
    return (
        <div>{ProfileData}</div>
    )
}
export default UxDesign;