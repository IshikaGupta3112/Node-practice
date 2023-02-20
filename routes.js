const fs=require("fs");
const requireHandler=(req , res)=>{

const url = req.url;
const method= req.method;
if(url==='/'){
    res.write('<html>');
    res.write('<head><title>My form</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></body>');
    res.write('</html>'); 
    return res.end();
}
if(url==='/message' && method==='POST'){
   const body=[];
   req.on('data' ,(chunk)=> {
   console.log(chunk);
   body.push(chunk);
   });
  return req.on('end',()=>{
    const parsedBody = Buffer.concat(body).toString();
    console.log(parsedBody);
    const message = parsedBody.split("=")[1];
    fs.writeFile("message.txt" , message ,(err)=>{
        res.statusCode=302;
        res.setHeader('Location', '/');
        return res.end(); 
    });  
   });

}
res.setHeader("Content-Type" , 'text/html');
res.write('<html>');
res.write('<head><title>My web</title></head>');
res.write('<body><h1>Hello from node js</h1></body>');
res.write('</html>');
res.end();
}

// module.exports = requireHandler;

// module.exports.handler = requireHandler;
// module.exports.text = "abcdef";

//exports.handler = requireHandler;
//exports.text = "abcdef";

module.exports ={
    handler:requireHandler , 
    text:"abcdef"
}