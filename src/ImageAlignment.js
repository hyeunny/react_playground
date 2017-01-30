import React, { Component } from 'react';

import iconPro from './icn-pro.svg';
import iconTeams from './icn-teams.svg';
import iconComms from './icn-comms.svg';

class ImageAlignment extends Component {

  render() {
    return (
      <div>
        <div style={{width: '33%', float: 'left'}}>
          <img src={iconPro} />
        </div>
        <div style={{width: '33%', float: 'left'}}>
          <img src={iconTeams} />
        </div>
        <div style={{width: '33%', float: 'left'}}>
          <img src={iconComms} />
        </div>
      </div>
    );
  }
}

export default ImageAlignment;
