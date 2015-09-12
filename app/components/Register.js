import React, { Component } from 'react';

export default class Register extends Component {
	render() {
		return (
			<div>
				<form action="/user/register" method="post">
					<input type="text" name="username"/>
					<input type="password" name="password" />
				<button type="submit">Submit</button>
				</form>
			</div>
			);
	}
}