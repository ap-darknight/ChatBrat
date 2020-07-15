import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signin, signInWithGoogle, signInWithGitHub } from "../helpers/auth";

export default class Login extends Component {
	
	constructor(props){
		super(props);
		
		this.state = {
			error: null,
			email: '',
			password: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.googleSignIn = this.googleSignIn.bind(this);
		this.githubSignIn = this.githubSignIn.bind(this);
	}
	
	handleChange(event){
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	
	async handleSubmit(event){
		event.preventDefault();
		this.setState({ error: '' });
		try{
			await signin(this.state.email, this.state.password);
		} catch(error){
			this.setState({error: error.message});
		}
	}
	
	async googleSignIn(){
		try{
			await signInWithGoogle();
		}catch(error){
			this.setState({error: error.message});
		}
	}
	
	async githubSignIn(){
		try{
			await signInWithGitHub();
		}catch(error){
			this.setState({error: error.message});
		}
	}
	
	render(){
		return (
			<div className="container">
				<form className="mt-5 py-5 px-5"
					autocomplete="off"
					onSubmit={this.handleChange}>
				
					<h1>Login to <Link className="title ml-2">ChatBrat</Link></h1>
					<p className="lead">Fill in the form to login to your account</p>
					<div className="form-group">
						<input className="form-control"
							placeholder="Email"
							name="email"
							type="email"
							onChange={this.handleChange}
							value={this.state.email} />
					</div>
					<div className="form-group">
						<input className="form-control"
							placeholder="Password"
							name="password"
							type="password"
							onChange={this.handleChange}
							value={this.state.password} />
					</div>
					<div className="form-group">
						{this.state.error ? (
							<p className="text-danger">{this.state.error}</p>
						) : null}
					</div>
					<p>You can also log in with any of these services</p>
					<button className="btn btn-danger mr-2" type="button" onClick={this.googleSignIn}>Sign in with Google</button>
					<button className="btn btn-secondary" type="button" onClick={this.githubSignIn}>Sign in with Github</button>
					<hr/>
					<p>Don't have an account? <Link to="/signup">Sign up</Link></p>
					
				</form>
			</div>
		);
	}
}

