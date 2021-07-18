// /**
//  * Find all customers
//  */
//  app.use("/api/datalink/customer", function (req, res, next) {
//     var options = { method: 'GET',
//     url: 'http://127.0.0.1:5001/test',
//     headers:
//      { 'cache-control': 'no-cache',
//        Connection: 'keep-alive',
//        'accept-encoding': 'gzip, deflate',
//        Host: 'http://127.0.0.1',
//        'Cache-Control': 'no-cache',
//        Accept: '*/*',
//        'User-Agent': 'PostmanRuntime/7.15.0' }
//       };

//     return request(options, function (error, response, body) {
//       if (error) throw new Error(error);
//       res.json(body);
//     });
//   });
//   ​
// const express = require('express')
// // will use this later to send requests
// const http = require('http')
// // import env variables
// require('dotenv').config()

// const app = express()
// const port = process.env.PORT || 3000

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

// app.get('/', (req, res) => {
// 	res.status(200).send('Server is working.')
// })

// app.listen(port, () => {
// 	console.log(`🌏 Server is running at http://localhost:${port}`)
// })
// module.exports = {
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:5000',
//         ws: false,
//         changeOrigin: true,
//       },
//     },
//   },
// // }
// const express = require('express')
// app = express()
// console.log('on 5000')

// app.get('/webhock', (req, res) => {
//   res.send('welcome')
// })

//app.listen(5000)
const fetch = require('node-fetch')
// const body = { sentence: 'Hi' }

// fetch('http://127.0.0.1:5001/test', {
//   method: 'post',
//   body: JSON.stringify(body),
//   headers: { 'Content-Type': 'application/json' },
// })
//   .then((res) => res.json())
//   .then((json) => console.log(json))
function checkStatus(res) {
  if (res.ok) {
    // res.status >= 200 && res.status < 300
    return res
  } else {
    throw MyCustomError(res.statusText)
  }
}

async function post_request() {
  const url = 'http://localhost:5001/test'
  const body = { sentence: 'Hi' }
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  }) //.then((res) => console.log(res))
  const data = await res.text() //assuming data is json
  console.log('data is ' + data)
}
post_request()
