var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
app.get("/",function(req,res){
	res.send("Hi there");
});
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine" , "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
var blogSchema = new mongoose.Schema({
	title:String,
	image:String,
	body:String,
	created: {type:Date, default:Date.now}
});
var Blog = mongoose.model("Blog",blogSchema);
app.listen(3000,function(req,res){
	console.log("server is on"); 
})
	