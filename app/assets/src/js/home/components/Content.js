import React, { Component, PropTypes } from 'react';

class Content extends Component {
  static propTypes = {
    microdata: PropTypes.object,
    mydata: PropTypes.object,
  };
  // componentWillMount(){
  //   console.log('componentWillMount ....s')
  // }
  render() {
    const { microdata, mydata } = this.props;
    const data = Array.from(mydata.data);


    // Object.keys(data).forEach(function(key){
    //   return  <span>{data[key].login}</span>
    // })
    // for(let i=0;i< data.length;i++){
    //   data[i].login
    // }
    const myda=[{id:1},{id:2},{id:3}]
    return (
      <div>
        hellol：{mydata.nick}
        {/* <h5>{data}</h5> */}

        {
          data.map(function(value){
            return <h5> {value.login} :{value.email}</h5> 
          })
        } 


      </div>
    );
  }
}

export default Content;
