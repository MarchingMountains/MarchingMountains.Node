import React, {Component} from 'react';
import HeaderStore from '../stores/HeaderStore'
import HeaderActions from '../actions/HeaderActions';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = HeaderStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HeaderStore.listen(this.onChange);
    HeaderActions.isLoggedIn();
  }

  componentWillUnmount() {
    HeaderStore.unlisten(this.onChange);
  }

  onChange(state) { 
    this.setState(state);
  }

  render() {
    return (    
      <div className="header clearfix">
        <nav>
          <ul className="nav nav-pills pull-right">
            <li role="presentation"><a href="/" title="home">Home</a></li>
            <li role="presentation"><a href="/project" title="about">About</a></li>
            <li role="presentation"><a href="/faq" title="Frequently asked questions">FAQ</a></li>
            <li role="presentation"><a href="/donate-a-musical-instrument" title="Donate a musical instrument">Donate a musical instrument</a></li>
            <li role="presentation"><a href="http://www.justgive.org/nonprofits/donate.jsp?ein=26-3799835" title="Donate money to Marching Mountains">Donate money</a></li>
            <li role="presentation"><a href="/contact" title="Contact Marching Mountains">Contact</a></li>
          </ul>
        </nav>
        <a href="/" title="home"><img src="/img/MarchingMountainsLogo.png" alt="Marching Mountains Logo" /></a>
      </div>
    );
  }
}

export default Header;