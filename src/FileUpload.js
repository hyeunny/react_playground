import React, { Component } from 'react';
import LinearProgress from 'material-ui/LinearProgress';

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  _handleDrop = (e) => {
    this._preventDefault(e);
    const dt = e.dataTransfer;
    const files = dt.files;
    const reader = new FileReader();
    reader.onloadstart = () => this.setState({loading: true});
    reader.onload = () => this.setState({loading: false});
    reader.readAsText(files[0]);

    console.log(files);
  };

  _preventDefault = (e) => {
    e.stopPropagation();
    e.preventDefault();
  }



  render() {
    return (
      <div 
        style={{border:'1px solid red', height: '400px'}} 
        onDrop={this._handleDrop} 
        onDragEnter={this._preventDefault}
        onDragOver={this._preventDefault}
      >
        <input ref="fileInput" type="file" />
        <br/>
        <br/>
        {this.state.loading &&
          <LinearProgress mode="indeterminate" />
        }
      </div>
    );
  }
}

export default FileUpload;
