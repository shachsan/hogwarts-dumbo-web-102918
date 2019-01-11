import React from 'react';
import piggy from '../porco.png'

const HogShow =(props)=>{
    return(
        <div>
            <img src={piggy} alt="hogshow"/>
            <p>Name:{props.hog.name}</p>
            <p>Specialty:{props.hog.specialty}</p>
            <p>Greased:{props.hog.greased ? "True" : "False"}</p>
            <p>Weight Ratio:{props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
            <p>Highest Medal achieved:{props.hog['highest medal achieved']}</p>
        </div>
    )
}

export default HogShow;