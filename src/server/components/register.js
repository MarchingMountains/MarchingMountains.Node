import React from 'react';

class Register extends React.Component {
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
module.exports = Register;