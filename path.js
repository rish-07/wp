/*const http=require('http')
const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        'content-Type':'text/html'
    });
    res.write("<h1>Hello</h1>")
    res.end();
})
const port =1111;
const IP='127.0.0.1';
server.listen(port,()=>{
    console.log("server running on PORT"+ port);
}) */

//OS MODULE
/*const os=require('os')
console.log(`${os.platform()}`)
console.log(`${os.arch()}`)
console.log(`${os.hostname()}`)
console.log(`${os.type()}`)
console.log(`${os.totalmem()}`)
*/

//EVENT .JS
/*const event = require('events')
const emitter=new event.EventEmitter();
emitter.on('buttonClicked',()=>{
    console.log('button is clicked');
});
emitter.emit('buttonClicked')
const greetHandler=(name)=>{
    console.log(`Hello , ${name}`);
};
emitter.on('greet',greetHandler)
emitter.emit('greet','alekhya'); */

 //PATH .JS 
 const path=require('path')
 console.log(__filename);
 console.log(__dirname);
 console.log(path.basename(__dirname));
 console.log(path.extname(__dirname));
 console.log(path.parse(__dirname));
 console.log(path.parse(__filename));
console.log(path.isAbsolute(__filename))
console.log(path.format(path.parse(__dirname)));
