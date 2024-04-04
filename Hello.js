export default function Hello(app) {
    function rootHandler(req, res) { // req parses the json to create an object to give back 
    res.send("<h1>Welcome to Full Stack</h1>"); // res sends to the client 
}

function sayHello(req, res) {
    res.send("<h1>Life is Good!</h1>");
}

app.get("/", rootHandler);
app.get("/hello", sayHello); 
app.get("/good", (req, res) => {
    res.send("<h1>Good Morning</h1>")
})}
