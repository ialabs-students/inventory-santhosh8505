// const ex1=require("express"); 
// //require is like an import
// //require(express), it will see any library that exporting express in the nodule modules..
 
// const server=ex1();
// //it is application or server object
// //it will initialize the back end server when u call it
 
// server.listen(8000,()=>{
//     console.log("The server is running on the port number => 8000");
// });
 
// server.get("/hello",(request,response)=>{
//     response.send("Hello is running....");
//     console.log("hello is called ");
// });
// //http://localhost:8000/hello/
// //returns the response in  webpage..
 
// //PATH PARAM
// server.get("/hello/:name",(request,response)=>{
//     response.send("Path Param is running...."+ request.params.name);
//     console.log("Path param is called ");
// });
 
// //QUERY PARAM
// server.get("/hi",(request,response)=>{
//     response.send("Query param is running...."+ request.query.name);
//     console.log("Query param is called ");
// });
 
//CHUMMMAAAAA>>>>>>
// app.get("/http2",(request,response)=>{
//     const Employee=[{"name":"Selva","Age":18,"Email_id":"rselav216@gmail.com"},
//     {"name":"Raj","Age":20,"Email_id":"raj@gmail.com"},
//     {"name":"Msdhoni","Age":25,"Email_id":"Msdhoni2019@gmail.com"}
// ];
//     response.send(Employee);
//     console.log("https is called ");
// });
//CHUMMMAAAAA>>>>>>
 
const express = require('express');
const santy = express();
santy.use(express.json());
 
//Function for next parameter
var name_validate=(request,response, next)=>{
    var data=request.body;
    if(data.Name==undefined){
        response.status(404);
        response.send("PROVIDE NAME");
    }
    next();
};
 
santy.listen(8000,() => {
    console.log("HTTP SERVER IS RUNNING");
});
// http://localhost:8000/

const List1=[{"Grocery_Name":"Rice","Quantity":"10kg"},
{"Grocery_Name":"Wheat","Quantity":"15kg"},
{"Grocery_Name":"Maida","Quantity":"20kg"}
];

santy.get("/Retrieve/",(request,response)=>{
    response.send(List1);
    });
 
//POST CALL
santy.post("/Post/",name_validate,(request,response)=>{
    const List2={
        "Grocery_Name":request.body.Grocery_Name,
        "Quantity":request.body.Quantity
    }
    console.log(request.body);
    List1.push(List2);
    response.send("Updated & created");
    });
 
santy.put("/Put/",(request,response)=>{
    for(let g1 of List1){
        if(g1.Grocery_Name==request.body.Grocery_Name){
            g1.Grocery_Name="Corn Flour"
        }
    }
    response.send(List1);
})
 
santy.delete("/Delete/",(request,response)=>{
    for(let g1 in List1){
        if(List1[g1].Grocery_Name=="Maida"){
            delete List1[g1];
        }
    }
    response.send(List1);
})
 
santy.get("/Find/",(request,response)=>{
    for(let g1 in List1){
        if(List1[g1].Grocery_Name=="Rice"){
            response.send(List1[g1]);
        }
    }
})


