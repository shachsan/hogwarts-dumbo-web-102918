import React from 'react';
import HogTile from './HogTile'

const HogsContainer=(props)=>{
    console.log(props.hogList);
    return <div>
        {
            props.hogList.map((hog, i) => <HogTile key={i} hog={hog}/>)
        }
    </div>
}

export default HogsContainer;