const express = require("express");
const StudentController = require("./Controller/StudentController");
const PORT = 5789;

const app = express()
app.use(express.json);

let name="khushi.borana";
    console.log("hello and welcome"+ name);

    app.listen(PORT,(req,res)=>{
console.log('server is started on http://localhost:${PORT}');
    });

    app.get("/",(req,res)=>{
        req.set("Hello");
    });

app.post("/students",StudentController.create);
app.get("/students",StudentController.readAll);
app.get("/students/:id",StudentController.readOne);
app.put("/students/:id",StudentController.Update);
app.delete("/students/:id",StudentController.destroy);

