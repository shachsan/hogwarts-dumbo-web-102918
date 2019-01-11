import React from 'react';
import piggy from '../porco.png'

const HogShow =(props)=>{
    return(
        <div>
            <img src={require(`../hog-imgs/${props.hog.name.toLowerCase().replace(/\s/g,'_')}.jpg`)} width='450px' height="450px" alt="hogshow"/>
            <h3>Name:{props.hog.name}</h3>
            <p>Specialty:{props.hog.specialty}</p>
            <p>Greased:{props.hog.greased ? "True" : "False"}</p>
            <p>Weight Ratio:{props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
            <p>Highest Medal achieved:{props.hog['highest medal achieved']}</p>
            <br/>
            <button onClick={props.showAllHogs}>Back</button>

        </div>
    )
}

export default HogShow;