const koaRouter = require('koa-router');
const VERSION = require('../app/assets/package.json').version;

const axios = require('axios')
const graphqlurl = 'http://localhost:4003/graphql?'
let microdata = {
    styleDomain: "//localhost:3000/assets/",
    styleVersion: VERSION,//1.0
};

//请求数据
let ConfigGraphql={
    url:graphqlurl,
    method:'post',
    data:{
        query : `query {administrators { id , login , email } }`
    }
}
let data =[]
axios(ConfigGraphql)
            .then(res =>{
                // console.log(res.data);
                data = res.data.data.administrators
            }).catch(err => {
                console.log('graphql error'+ err)
            })

const home = function* (){
    console.log(data) 
    this.body = this.render('Home', {
        microdata: microdata,
        mydata: {
            nick: 'server render body .....',
            data: (data)
        }
    }, true);
}

const api = function* (){
    this.body = this.render('Api',{
      microdata : microdata,
      mydata: {
        testdata:'The test data for graphql ......'
      }
    },true);
  }
  
module.exports={
    home,
    api
}