import path from 'path';
import React, { Component, PropTypes } from 'react';
import ContentView from '../assets/src/js/api/components/ContentView.js';
import Default from './layout/Default';

class Api extends Component {
  static propTypes = {
    microdata: PropTypes.object,
    mydata: PropTypes.object,
  };

  render() {
    const { microdata, mydata } = this.props;
    let homeJs = `${microdata.styleDomain}/build/${microdata.styleVersion}/home.js`;
    let scriptUrls = [homeJs];

    return (
      <Default
        microdata={microdata}
        scriptUrls={scriptUrls}
        title={"demo"}>
        <div id="demoApp"
          data-microdata={JSON.stringify(microdata)}
          data-mydata={JSON.stringify(mydata)}>
          <ContentView
           mydata={mydata} microdata={microdata} />
        </div>
      </Default>
    );
  }
};

module.exports = Api;
