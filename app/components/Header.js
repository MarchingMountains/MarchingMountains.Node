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
      <div className="container-fluid">
        <div className="row">
         <div className="col-xs-6 col-md-4"><a href="/" title="home"><img src="/img/MarchingMountainsLogo.png" alt="Marching Mountains Logo" /></a></div>
        <div className="col-xs-6 col-md-8"><nav>
          <ul className="nav nav-pills pull-right">
            <li role="presentation"><a href="/" title="home">Home</a></li>
            <li role="presentation"><a href="/project" title="about">About</a></li>
            <li role="presentation"><a href="/faq" title="Frequently asked questions">FAQ</a></li>
            <li role="presentation"><a href="/donate-a-musical-instrument" title="Donate a musical instrument">Donate a musical instrument</a></li>
            <li role="presentation"><a href="/contact" title="Contact Marching Mountains">Contact</a></li>
            <li role="presentation"><a href="/band-directors" title="For Band Directors">Band Directors</a></li>
            <li role="presentation"><a href="https://givemn.org/fundraiser/help-marching-mountains-get-kids-musical-instruments55fc9b4d8c022" target="_blank"><img src="/img/donate.png" alt="Help Marching Mountains - Get Kids Musical Instruments | GiveMN" /></a></li>
          </ul>
        </nav>
       </div>
      </div>
      <br />
      </div>

    );
  }
}

export default Header;