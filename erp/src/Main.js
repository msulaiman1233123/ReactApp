import React,{Component} from 'react';
import Login from './Login/Login'
import Registration from './Registration/Registration'

class Main extends React.Component{
	
	render(){
		return(
			<div>
				<Login/>
				<Registration />
			</div>
			)
	}
	
}
export default Main;