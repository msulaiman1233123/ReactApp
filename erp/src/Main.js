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

=======
>>>>>>> 0851e3e8dc5da02fcc87e3bea0d3bdd656de7801
				<div >
					  <button type="button" onClick={()=> this.openComponent('Login')} class="btn btn-primary btn-sm">Login</button>
					  <button type="button" onClick={()=> this.openComponent('Register')} class="btn btn-secondary btn-sm">Register</button>
					 { this.state.component=='Login' ? <Login/> : null }
<<<<<<< HEAD
					 {this.state.component=='Register' ? '</Registration>: null}
				</div>

			)
=======
					 {this.state.component=='Register' ? <Registration/>: null}
				</div>
			);
>>>>>>> 0851e3e8dc5da02fcc87e3bea0d3bdd656de7801
	}
	openComponent(component){
		this.setState({component: component});
	}
	
}
export default Main;