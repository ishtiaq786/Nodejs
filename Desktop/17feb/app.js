const express = require ("express")
var app = express()
app.use(express.json())
students = [
    {id:01,name:"Muhammad Naufil"},
    {id:02,name:"Ukasha"},
    {id:03,name:"hehhe"},
]
app.get("/",(request,response)=>{
    response.send(students)
})


// app.get("/students/:id",function(request,response)
// {
//     const student=students.find(s=> s.id === parseInt(request.params.id));
//     if(!student){
//         response.status(404).send("Ivalid Id");
//         return;
//     }
//     response.send(student);
// })

app.get("/students/:id",function(request,response)
{
    const student=students.find(s=> s.id === parseInt(request.params.id));
    if(!student){
        response.status(404).send("Ivalid Id");
        return;
    }
    response.send(student);
})

app.post("/students",function(request,response)
{
    if (request.body.name.length < 3)
    {
        response.status(400).send("Invalid data");
        return;
    }
    const student= {
        id: students.length +1,
        name: request.body.name
    }
    students.push(student);
    response.send(student);
})
app.listen(3000,()=>console.log("I am up on posrt 3000"))