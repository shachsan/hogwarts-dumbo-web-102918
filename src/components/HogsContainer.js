import React from 'react';
import HogTile from './HogTile';
import HogShow from './HogShow';

const HogsContainer=(props)=>{
    return <div>
        {
           props.hogList.length > 1 ? props.hogList.map((hog, i) => <HogTile key={i} hog={hog} showHogsDet={props.showHogsDet}/>):<HogShow hog={props.hogList[0]} showAllHogs={props.showAllHogs}/>
        }
    </div>
}

export default HogsContainer;