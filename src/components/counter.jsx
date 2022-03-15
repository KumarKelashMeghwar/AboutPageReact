import React, { Component, createContext } from "react";
import { Badge } from "reactstrap";

class Counter extends Component {
  render() {
    return <h1>hello</h1>;
  }
  /*	state = {
							count : 0,
							tags:['tag1','tag2','tag3'],
							hellos:['hello1','hello2','hello3'],
							imageUrl: 'https://picsum.photos/400',
							address: {
								street : ''
							}
						};
						//constructor(){
						//	super();
						//	this.handleIncrement = this.handleIncrement.bind(this);
						//}

						handleIncrement = () => {  //arrow function
							console.log('Increment Clicked',this);
							this.setState({ count:this.state.count+1});
					
						}

						renderArrays(){
							if (this.state.tags.length===0) return <p>There are no tags!</p>;

						return <ul>{this.state.hellos.map(hello => <li key= {hello}>{hello}</li>)}</ul>;
						}

						styles = {
							fontSize: 20,
							fontWeight: "bold"
						};

						render(){
							const greetings = "this shows the css styles and jsx codes";


							return (
							<React.Fragment>
								<div>
								<img src = {this.state.imageUrl} alt = "" />
								<h1 style={{fontSize: 80}}>This is group project</h1>
								<h2>{greetings}</h2>
								<span style={this.styles} className="text-primary m-2">{this.greetings}</span>
								<span className={this.getColour()}>{this.formatCount()}</span>
								<button className="btn btn-secondary btn-sm">increment</button>
								<button onClick={ () => this.handleIncrement({id:1})} variant= "primary">Profile <Badge bg="secondary">9</Badge>
								<span className="visually-hidden">unread messages</span></button>
							</div>
							{/*making a list in render*/
}
/*	<ul>
								{this.state.tags.map(tag=><li key = {tag}>{tag}</li>)}							
								</ul>
								{this.state.tags.length===0 &&'Please create a new tag!'}
								{this.renderArrays()}
							</React.Fragment>
							);
					}

					getColour(){
							let classes ="<badge m-2 bg-";
							classes+=this.state.count ===0? "warning" : "primary";
							return classes;
					}


					formatCount(){
						const {count} = this.state;
						const x = 'zero'
						return count === 0? x : count; 
					}
					}*/

export default Counter;
