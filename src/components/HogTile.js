import React from 'react';
import HogShow from './HogShow'
import piggy from '../porco.png'

const showHog = hog => <HogShow hog={hog}/>


const HogTile=(props)=>{
    return (
        <div>
            <img onClick={()=>showHog(props.hog)} src={piggy} alt="hog"/>
            <p>Name:{props.hog.name} </p>
        </div>
    )
}
export default HogTile;
