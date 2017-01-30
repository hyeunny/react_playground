import React, { Component } from 'react';

import iconPro from './icn-pro.svg';
import iconTeams from './icn-teams.svg';
import iconComms from './icn-comms.svg';

class ImageAlignment extends Component {

  render() {
    return (
      <div>
        <div style={{width: '33%', float: 'left'}}>
          <div style={{height: '200px', position: 'relative'}}>
            <img style={{position: 'absolute', bottom: '0'}} src={iconPro} />
          </div>
        </div>
        <div style={{width: '33%', float: 'left'}}>
          <div style={{height: '200px', position: 'relative'}}>
            <img style={{position: 'absolute', bottom: '0'}} src={iconTeams} />
          </div>
        </div>
        <div style={{width: '33%', float: 'left'}}>
          <div style={{height: '200px', position: 'relative'}}>
            <img style={{position: 'absolute', bottom: '0'}} src={iconComms} />
          </div>
        </div>
      </div>
    );
  }
}

export default ImageAlignment;
