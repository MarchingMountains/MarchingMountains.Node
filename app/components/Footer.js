import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <footer className="footer">
        <div>
            <div>
                <h3>Press</h3>
                <ul>
                    <li><a href='/news/2013/Donating-Musical-Instruments-Changes-Childrens-Lives'>Donating Musical Instruments Changes Children’s Lives</a></li>
                    <li><a href='http://dotnetrocks.com/default.aspx?showNum=804' target='_blank'>Ian Felton Aids School Marching Bands with Technology</a></li>
                    <li><a href='http://technologyandfriends.com/SubText/archive/2012/10/22/tf235.aspx' target='_blank'>Ian Felton on Marching Mountains</a></li>
                    <li>
                        <a href='/news/2010/donated-instrument-distribution'>
                            School Kids in Distressed Appalachian
                            Counties Receive Donated Band Instruments
                        </a>
                    </li>
                    <li>
                        <a href='http://www.huffingtonpost.com/2010/09/02/post_509_n_704029.html' target='_blank'>Marching Mountains on HuffingtonPost
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <p className="text-center"><strong><em>Marching Mountains is a 501(c)(3), tax-deductible organization.</em></strong></p>
    </footer>
    );
  }
}
export default Footer;