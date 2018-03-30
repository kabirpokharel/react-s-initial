import React, { Component } from 'react';
import cssStyle from './App.css';
import '../components/persons/Person/person.scss';
import Soda from '../components/persons/Person/Person';


class Softdrink extends Component{
	state={
		data:[
			{id:"d1", name:"Fanta",color:"orange"},
			{id:"d2", name:"Coca-Cola",color:"black"},
			{id:"d3", name:"Sprite",color:"color_less"}
		],
		showContent:false
	}
	changeIt=()=>{
		let xyz=this.state.showContent;
		this.setState({showContent:!xyz});
	}
	onchange=(event,idElement)=>{ //yaha idElement ko satta direct index pathauda ni hunxa
		let index=this.state.data.findIndex(value=>value.id===idElement);
		const temp1=[...this.state.data];
		temp1[index].name=event.target.value;
		this.setState({data:temp1});

	}
	click=(index)=>{
		const temp2=[...this.state.data];
		temp2.splice(index,1);
		this.setState({data:temp2});
	}

  render(){
  	let displayed=null;
  	if(this.state.showContent){
  		displayed=(
  		<div>
  		{this.state.data.map((value,index) =>{
  			return <Soda name={value.name} color={value.color} key={value.id} change={(event)=>this.onchange(event,value.id)} clicking={()=>this.click(index)} />
  		})}
        </div>
        );
  	}


  	const conditionStyle=[];
        if(this.state.data.length<=2){
        	conditionStyle.push(cssStyle.yellow);
        }
        if(this.state.data.length<=1){
        	conditionStyle.push(cssStyle.red);
        }

  	let stringx="";
        if(this.state.data.length<=2){
        	stringx+="grey";
        }
        if(this.state.data.length<=1){
        	stringx+=" red apple";
        }


    return (
      <div className={cssStyle.App}>
      <button className={stringx} onClick={this.changeIt}>click to change</button>
      <h1 className={conditionStyle.join(' ')}>Softdrink Info</h1>
      {displayed}
      </div>
      );
  }
}
export default Softdrink;

//****************************************
import React from 'react';
import cssStyle from '../../../containers/App.css'
 

const Soda=(props)=>{
  return(
    <div className={[cssStyle.yellow,cssStyle.red].join(' ')}>
      <h1 onClick={props.click}>This is {props.name}</h1>
      <h2 onClick={props.clicking}>And it's {props.color}!!</h2>
      {props.children}
      <input type="text" onChange={props.change} value={props.name}/> 
    </div>
    );
}

export default Soda;