'use strict'

let request = {}   // 对外暴露一个空的对象

// import config from './config'


// 对象添加一个get方法，封装fetch
request.get = function(url){
  return fetch(url)
    .then((response) => response.json())
    // .then((data) => Mock.mock(data))
}


// request.post = function(url, body){  // body 是一个表单
//   var options = _.extend(config.header,{
//     body: JSON.stringify(body)
//   })
//
//   return fetch(url, options)
//     .then((response) => response.json())
//     // .then((data) => Mock.mock(data))
// }

module.exports = request
