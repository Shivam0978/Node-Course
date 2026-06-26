             //%%LEARNING ORDER IN WHICH EVENT LOOP WORKS

const result = (req,res) =>{
  console.log("1. event handler",req.url);
  const body = [];
  req.on('data',chunk =>{

    body.push(chunk);
    console.log("2. chunk came",chunk);
  });
  req.on('end',()=>{

    const answer = Buffer.concat(body).toString();
    console.log(answer);
    const params = new URLSearchParams(answer);
    const bodyObj = Object.fromEntries(params);
    console.log(bodyObj);
     console.log("3. End event came!",bodyObj);
    
    let result ; 
    switch (bodyObj.operation){
      case "+" :
       result = Number(bodyObj.num1) + Number(bodyObj.num2);
      break;

      case "-" :
       result= Number(bodyObj.num1) - Number(bodyObj.num2);

      break;
      case "*" :
       result = Number(bodyObj.num1) * Number(bodyObj.num2);
      break;

      case "/" :
      result = Number(bodyObj.num1) / Number(bodyObj.num2);
      break;

    }
    console.log("4. Sending the response");
      res.setHeader('Content-Type','text/html');
      res.write(`
      <html>
      <head>
      </head>
      <body>
        <h3> Your ans is ${result}</h3>
      </body>
      </html>
      `);
    
    console.log(result);
     res.end();
      })};


exports.result = result; 