const express=require("express");
const path=require("path");
const hbs=require("hbs");
const app=express();
const port=process.env.port || 3000;

//public static path
const staticpath=path.join(__dirname,"../public");
const temp_path=path.join(__dirname,"../templates/views");
const partial_path=path.join(__dirname,"../templates/partials");

app.set("view engine","hbs");
app.set("views",temp_path);
hbs.registerPartials(partial_path)
app.use(express.static(staticpath));

//routing

app.get("/",(req,res)=>
{
    res.render("index");
});
app.get("/about",(req,res)=>
{
    res.render("about");
});
app.get("/weather",(req,res)=>
{
    res.render("weather");
});
app.get("*",(req,res)=>
{
    res.render("404error",
    {
        errorMsg:"Oops page not found"
    });
});
app.listen(port,"127.0.0.1");