import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	return (
		<div className="navWrapper">
			
			<div className="TwirlyPig"><br/>
				<ul>
					<li>Filter Hogs
						<input type="text" name="search" value={props.searchValue}
								placeholder="Search Hogs by Name"
								onChange={(e)=>props.setSearchValue(e)}	
						/>Greased
						<input type="checkbox" name="greased" checked={props.greasyWhat} onChange={props.setGreasy}/>
					</li>
					<li>Sort Hogs By
						<select>
							<option value="name">Name</option>
							<option value="ratio">Weight Ratio</option>
						</select>
					</li>

				</ul>
		
			</div>
		</div>
	)
}

export default Nav
