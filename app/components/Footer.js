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
      <footer>
        <div class='row-fluid'>
                <p><strong><span>OUR MISSION:</span>&nbsp;&nbsp;&nbsp; Marching Mountains goal is to create a network to supply public school band programs in distressed counties in Appalachia with donated new and used musical instruments.</strong></p>    
        </div>
        <div class='row-fluid'>
            <div class='span6'>
                <h3>More Information</h3>
                <br />
                <a href='http://www.justgive.org/nonprofits/donate.jsp?ein=26-3799835'>DONATE MONEY</a><br />
                <a href='/donate-a-musical-instrument' title='Donate a musical instrument'>DONATE A MUSICAL INSTRUMENT</a><br />
                <a href='/help' title='Contact Marching Mountains'>CONTACT</a><br />
                <a href='/project' title='Marching Mountains project'>ABOUT</a><br />
                <br />                
           </div>
            <div class='span6'>
                <h3>Recent Press</h3>
                <ul class='news'>
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
    </footer>
    );
  }
}
export default Footer;