import React from 'react'
import { ReactDOM } from 'react'

class Lyfecycle extends React.Component{

    constructor(props){
        super(props);
        this.state={name:""};
        this.updateName=this.updateName.bind(this);
        this.testClick=this.testClick.bind(this);
    
    }

    updateName(e){
        this.setState({name:e.target.value})
    }

    testClick(e){
        alert("entered "+this.state.name)
    }
    componentDidMount(){
        console.log("mouting state calling method ");
    }
    shouldComponentUpdate(){
        console.log("updating state calling method");
        return true;
    }
    componentDidUpdate(){
        console.log("updating state calling method");
    }
    componentWillUnmount(){
        console.log("Unmouting state calling method");
    }


    render(){
        return(
            <div>
            enter your name: <input type="text" value={this.state.name}  onChange={this.updateName}/> <br />
            
            <input type="button" value="click here" onClick={this.testClick} />
            <h2>{this.state.name}</h2>
            </div>
        )
    }
}
export default Lyfecycle