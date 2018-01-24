import React, { Component, PropTypes } from 'react';

class ContentView extends Component {
  static propTypes = {
    microdata: PropTypes.object,
    mydata: PropTypes.object,
  };
  
  render() {
    const { microdata, mydata } = this.props;

    return (
      <div>{mydata.testdata}</div>
    );
  }
}

export default ContentView;
