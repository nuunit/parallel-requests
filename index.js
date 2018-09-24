
const request = require('request');

function sendRequest(requestNumber){
  return new Promise((resolve,reject) => {
      request.post({
        "headers": { "content-type": "application/json",
        "Authorization":"test-robot-interaktiv",
        "email": "khanit05@gmail.com"  
    },   
        "url": "https://test.interaktiv.sg/robot-test/",
        "body": JSON.stringify({
            "request": requestNumber      
        })
    }, (error, response, body) => {
        if(error) {
          reject(error);
        }
        resolve(JSON.parse(body));
    });
 });
}

Promise.all([sendRequest(1),sendRequest(2),sendRequest(3),sendRequest(4),sendRequest(5)])
  .then(result => {
    console.log(result)
    process.exit();
  })
  .catch(err => console.log('Error', err.message));