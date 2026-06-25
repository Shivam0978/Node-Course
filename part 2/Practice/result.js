const result = (req,res) =>{
  const body = [];
  req.on('data',chunk =>{

    body.push(chunk);
  });
  req.on('end',()=>{
    const answer = Buffer.concat(body).toString();
    console.log(answer);
    const params = new URLSearchParams(answer);
    const bodyObj = Object.fromEntries(params);
    console.log(bodyObj);
    
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