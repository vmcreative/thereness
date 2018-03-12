const
    express = require("express"),
    app     = express(),
    fs      = require('fs'),
    rawdata = fs.readFileSync('tours.json'),
    tours   = JSON.parse(rawdata);

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("landing");
});
app.get("/gallery", function(req, res){
    res.render("gallery", {gallery: tours});
});
app.get("/tour/:id", function(req, res){
    res.render("tour", {tour: tours[req.params.id]});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server running");
});

