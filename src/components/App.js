import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import './app.css'
import HogsConstainer from './HogsContainer'
// import '../hog-imgs'



class App extends Component {
  constructor(props){;
    super(props);

    this.state={
      hogs: hogs,
      search:'',
      greasyWhat:false,
      filterHogs:[]
    }
    
  }

  handleSearch=(e)=>{
    
    this.setState({
      search:e.target.value,
      hogs:[...hogs].filter(hog=>hog.name.startsWith(e.target.value))
    })
    
  }

 

  renderHogs=(hgs)=>{
    if(hgs.length > 1 )
      return hgs.map((hog, i)=><Nav key={i} id={i} singleHog={false} showHogsDet={this.showHogsDet} hog={hog}/>)
    else
      return <Nav id={1} singleHog={true} resetHogs={this.resetHogs} showHogsDet={this.showHogsDet} hog={hgs}/>
  }

  showHogsDet=(hog)=>{
  
      this.setState({
      hogs: [hog]
      })
  }

  handleGreasy=()=>{
    
      this.setState({
        greasyWhat:!this.state.greasyWhat,
        hogs:[...hogs].filter(hog=>hog.greased===this.state.greasyWhat)
      })
    
  }

  resetHogs=()=>{
    this.setState({hogs})
  }

  render() {
    return (
      <div className="App">
        <span className="headerText">Hogwarts</span>
        <Nav searchValue={this.state.search} setGreasy={this.handleGreasy} greased={this.state.greasyWhat} setSearchValue={this.handleSearch}/>
        <HogsConstainer hogList={this.state.hogs} showHogsDet={this.showHogsDet} showAllHogs={this.resetHogs}/>
          {/* {this.renderHogs(this.state.hogs)} */}
      </div>
    )
  }
}

export default App;
