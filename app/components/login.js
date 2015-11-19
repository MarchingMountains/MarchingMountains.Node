import React from 'react';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  login(e){
    e.preventDefault();

    Auth.login(this.state.username. this.state.password)
      .catch(function(err) {
        console.log("Error logging in", err);
      });
  }

	render() {
		return (
            <div className="row"> 
            <h1>Log-in</h1>
			<div className="col-md-6">
				<form className="form-horizontal" action="/login" method="post">
                  <div className="form-group">
                    <label htmlFor="username" className="col-sm-2 control-label">Email</label>
                    <div className="col-sm-10">
                      <input type="email" className="form-control" id="username" placeholder="Email" valueLink={this.linkState('username')} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="col-sm-2 control-label">Password</label>
                    <div className="col-sm-10">
                      <input type="password" className="form-control" id="password" placeholder="Password" valueLink={this.linkState('password')} />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" /> Remember me
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                      <button type="submit" className="btn btn-default" onClick={this.login.bind(this)}>Sign in</button>
                    </div>
                  </div>
                </form>
			</div>
            </div>
			);
	}
}
module.exports = Login;