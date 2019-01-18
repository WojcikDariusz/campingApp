var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use('/public', express.static('public'));

    var campgrounds = [
    
    {name: "Błekitna laguna", image: "https://images.unsplash.com/photo-1525811902-f2342640856e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1a7383ad093ffea99d373681b9974056&auto=format&fit=crop&w=1502&q=80"},
    {name: "Droga mleczna", image: "https://20dqe434dcuq54vwy1wai79h-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/23caa67e99c75c84468d07f6aa80027b-1024x683.jpg"},
    {name: "Błekitna laguna", image: "https://images.unsplash.com/photo-1525811902-f2342640856e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1a7383ad093ffea99d373681b9974056&auto=format&fit=crop&w=1502&q=80"},
    {name: "Droga mleczna", image: "https://20dqe434dcuq54vwy1wai79h-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/23caa67e99c75c84468d07f6aa80027b-1024x683.jpg"},
    {name: "Błekitna laguna", image: "https://images.unsplash.com/photo-1525811902-f2342640856e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1a7383ad093ffea99d373681b9974056&auto=format&fit=crop&w=1502&q=80"},
    {name: "Droga mleczna", image: "https://20dqe434dcuq54vwy1wai79h-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/23caa67e99c75c84468d07f6aa80027b-1024x683.jpg"},
    {name: "Błekitna laguna", image: "https://images.unsplash.com/photo-1525811902-f2342640856e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1a7383ad093ffea99d373681b9974056&auto=format&fit=crop&w=1502&q=80"},
    {name: "Droga mleczna", image: "https://20dqe434dcuq54vwy1wai79h-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/23caa67e99c75c84468d07f6aa80027b-1024x683.jpg"},
    {name: "Błekitna laguna", image: "https://images.unsplash.com/photo-1525811902-f2342640856e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1a7383ad093ffea99d373681b9974056&auto=format&fit=crop&w=1502&q=80"},
    {name: "Droga mleczna", image: "https://20dqe434dcuq54vwy1wai79h-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/23caa67e99c75c84468d07f6aa80027b-1024x683.jpg"},
    {name: "Błekitna laguna", image: "https://images.unsplash.com/photo-1525811902-f2342640856e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1a7383ad093ffea99d373681b9974056&auto=format&fit=crop&w=1502&q=80"},
    {name: "Droga mleczna", image: "https://20dqe434dcuq54vwy1wai79h-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/23caa67e99c75c84468d07f6aa80027b-1024x683.jpg"},
    {name: "Błekitna laguna", image: "https://images.unsplash.com/photo-1525811902-f2342640856e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1a7383ad093ffea99d373681b9974056&auto=format&fit=crop&w=1502&q=80"},
    {name: "Droga mleczna", image: "https://20dqe434dcuq54vwy1wai79h-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/23caa67e99c75c84468d07f6aa80027b-1024x683.jpg"},
    {name: "Błekitna laguna", image: "https://images.unsplash.com/photo-1525811902-f2342640856e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1a7383ad093ffea99d373681b9974056&auto=format&fit=crop&w=1502&q=80"},
    {name: "Droga mleczna", image: "https://20dqe434dcuq54vwy1wai79h-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/23caa67e99c75c84468d07f6aa80027b-1024x683.jpg"}
     
    ];

app.get("/", function(req,res) {

    res.render("landing");
});

app.get("/campgrounds", function(req,res) {
    res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds",function(req,res) {
  
   var name = req.body.name;
   var image = req.body.image;
   var newCampground = {name: name, image: image};
   
   campgrounds.push(newCampground);
   res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req,res) {
    res.render("new.ejs");
});



app.listen(3000, function(){
   console.log("Yelp Camp has started!"); 
});
