import React,{Component} from 'react';
import Login from './Login/Login'
import Registration from './Registration/Registration'

class Main extends React.Component{
	
	constructor(){
		super();
		this.state = {component: ''};
	}
	
	render(){
		return(
<<<<<<< HEAD
				<div >
					  <button type="button" onClick={()=> this.openComponent('Login')} class="btn btn-primary btn-sm">Login</button>
					  <button type="button" onClick={()=> this.openComponent('Register')} class="btn btn-secondary btn-sm">Register</button>
					 { this.state.component=='Login' ? <Login/> : null }
					 {this.state.component=='Register' ? 'Register': null}
				</div>
=======
			<div>
				<Login/>
				<Registration />
			</div>
>>>>>>> e19e708f3f0ccfa12133af4d82e748fcf9e02634
			)
	}
	openComponent(component){
		this.setState({component: component});
	}
	
}
export default Main;