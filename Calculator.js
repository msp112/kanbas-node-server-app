function Calculator(app) {
    app.get("./a5/add/:num1/:num2", (req, res) => { //Anything coming from the client is embedded in the request  
        const params = req.params;
        const a  = parseInt(params.num1); 
        const b = parseInt(params.num2); 
        const sum = a + b;  
        res.send(`Sum of ${a} + ${b} is equal to ${sum}`);
    });

    app.get("/a5/calculator", (req, res) => {
        const query = req.query;
        res.send(query);
    })
}
export default Calculator; 