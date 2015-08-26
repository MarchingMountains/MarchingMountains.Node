import React from 'react';

class Login extends React.Component {
	render() {
		return (
            <div className="row">
            <h1>Log-in</h1>
			<div className="col-md-6">
				<form className="form-horizontal" action="/login" method="post">
                  <div className="form-group">
                    <label htmlFor="username" className="col-sm-2 control-label">Email</label>
                    <div className="col-sm-10">
                      <input type="email" className="form-control" id="username" placeholder="Email" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="col-sm-2 control-label">Password</label>
                    <div className="col-sm-10">
                      <input type="password" className="form-control" id="password" placeholder="Password" />
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
                      <button type="submit" className="btn btn-default">Sign in</button>
                    </div>
                  </div>
                </form>
			</div>
            </div>
			);
	}
}
export default Login;