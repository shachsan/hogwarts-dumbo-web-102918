import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	return (
		<div className="navWrapper">
			
			<div className="TwirlyPig"><br/>
				<a>
					<img onClick={()=>props.showHogsDet(props.hog)} src={require(`../hog-imgs/${props.hog.name.toLowerCase().replace(/\s/g,'_')}.jpg`)} className="App-logo" alt="piggy" />
				</a><br/>

				<a>Name: {props.hog.name}</a><br/>

				<a>Specialty: {props.hog.specialty}</a><br/>

				<a>Greased: {props.hog.greased ? 'True' : 'False'}</a><br/>

			</div>
			{props.singleHog ? "Weight ratio: " : null}
			{props.singleHog ? props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] : null}<br/>
			{props.singleHog ? <button onClick={()=>props.resetHogs()}>Back</button> : null}
			{/* <span className="normalText">A React App for County Fair Hog Fans</span> */}
		</div>
	)
}

export default Nav
