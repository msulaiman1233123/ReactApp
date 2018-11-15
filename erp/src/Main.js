import React,{Component} from 'react';
import Login from './Login/Login'

class Main extends React.Component{
	
	constructor(){
		super();
		this.state = {component: ''};
	}
	
	render(){
		return(
				<div >
					  <button type="button" onClick={()=> this.openComponent('Login')} class="btn btn-primary btn-sm">Login</button>
					  <button type="button" onClick={()=> this.openComponent('Register')} class="btn btn-secondary btn-sm">Register</button>
					 { this.state.component=='Login' ? <Login/> : null }
					 {this.state.component=='Register' ? 'Register': null}
				</div>
			)
	}
	openComponent(component){
		this.setState({component: component});
	}
	
}
export default Main;