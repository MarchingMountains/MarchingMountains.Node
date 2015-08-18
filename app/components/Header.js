import React from 'react';
import {Link} from 'react-router';
import HeaderStore from '../stores/HeaderStore'
import HeaderActions from '../actions/HeaderActions';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = HeaderStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HeaderStore.listen(this.onChange);
  }

  componentWillUnmount() {
    HeaderStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (       
  <div>
      <div>
          <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="/project">ABOUT</a></li>
          </ul>
      </div>
      <section id="login">
      </section>
    <header>        
    </header>
    </div>
    );
  }
}

export default Header;