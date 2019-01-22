//app.js jest odpowiedzialne za dzialanie aplikacji po stronie serwera node.js. 
//Znajduja sie tutaj zdefiniowane Routes, baza danych mongoDB

var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose");

mongoose.connect('mongodb://localhost:27017/myCamps');
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use('/public', express.static('public'));

//MngoDB schemat kempingow

var campgroundSchema = new mongoose.Schema({
     name: String,
     image: String,
     description: String
});

//moongose model

var Camp = mongoose.model("Campground", campgroundSchema);

//Route dla strony glownej

app.get("/", function(req,res) {

    res.render("landing");
});

//INDEX Route - dla wyswietlania kempingow

app.get("/campgrounds", function(req,res) {

    var campgrounds = Camp.find({}, function(err, allCampgrounds){
        if(err) {
           console.log("ERROR");
        } else {
           res.render("index.ejs",{campgrounds: allCampgrounds});
        }
    });
});

//CREATE - Route dla dodawania nowych Kempingow

app.post("/campgrounds",function(req,res) {
   
    var name     = req.body.name,
        image    = req.body.image,
        description = req.body.description;

    var newCamp = {name: name, image: image, description: description};

    Camp.create({newCamp}, function(err,camp) {
        if(err) {
            console.log("Error during adding to DB");
        } else {
            console.log(camp);
        }
    });

    //Redirecting back to campgrounds list page
    
    res.redirect("/campgrounds");
});

// NEW Route - do formularza dodawania nowych kempingow

app.get("/campgrounds/new", function(req,res) {
    res.render("new.ejs");
});

//SHOW ROUTE - pokazuje wiecej informacji o danym kempingu

app.get("/campgrounds/:id", function(req,res) {
   
   Camp.findById(req.params.id, function(err, foundCampground) {
       if(err) {
           console.log(err);
       } else {
           console.log(foundCampground.id);
           res.render("show.ejs",{campground: foundCampground}); 
       }
   });
 
});

//Nasluchiwanie serwer

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Yelp Camp has started!"); 
});

//ROUTES

//INDEX
//NEW
//CREATE
//SHOW /campgorunds/:id