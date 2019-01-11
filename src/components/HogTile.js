import React from 'react';
// import HogShow from './HogShow'
import piggy from '../porco.png'



const HogTile=(props)=>{
    return (
        <div>
            <img onClick={()=>props.showHogsDet(props.hog)} src={require(`../hog-imgs/${props.hog.name.toLowerCase().replace(/\s/g,'_')}.jpg`)} alt="hog"/>
            <h3>Name: {props.hog.name}</h3>
        </div>
    )
}
export default HogTile;
