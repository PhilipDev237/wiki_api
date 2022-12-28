const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/wikiDB";

const app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

mongoose.connect(url);
mongoose.set('strictQuery', true); 

const articleSchema = new mongoose.Schema({
    title: String,
    content: String
});

// init wiki model
const Article = mongoose.model("Article", articleSchema);

app.route("/articles")
.get(function(req, res){
    Article.find({}, function(err, articles){
        if(!err){
            res.send(articles);
        }else{
            res.send(err);
        }        
    });
})

.post(function(req, res){
    const article = new Article({
        title: req.body.title,
        content: req.body.content
    });

    article.save(function(err){
        if(!err){
            res.send("Successfully added a new article")
        }else{
            res.send(err);
        }
    });
})

.delete(function(req, res){
    Article.deleteMany(function(err){
        if(!err){
            res.send("Succesfully deleted all articles");
        }else{
            res.send(err);
        }
    });
});

// Requests targetting specific articles

app.route("/articles/:articleTitle")
.get(function(req, res){
    const articleTitle = req.params.articleTitle;

    Article.findOne({title: articleTitle}, function(err, foundArticle){
        // if(!err){
        //     console.log(foundArticle);
        // }else{
        //     console.log(err);
        // }   
        if(foundArticle){
            res.send("Found article");
        }else{
            res.send("Article not found");
        }
    });    
})

.put(function(req, res){
    Article.updateOne(
    {title: req.params.articleTitle}, 
    {title: req.body.title, content: req.body.content}, 
    function(err, results){
        if(!err){
            res.send("Successfully updated article");  
        }else{
            res.send(err);
        }
    });
})

.patch(function(req, res){
    Article.updateOne(
    {title: req.params.articleTitle}, 
    {$set: req.body}, 
    function(err, results){
        if(!err){
            res.send("Successfully updated article");  
        }else{
            res.send(err);
        }
    });
})

.delete(function(req, res){
    Article.deleteOne(
    {title: req.params.articleTitle}, 
    function(err){
        if(!err){
            res.send("Succefully deleted article");
        }else{
            res.send(err);
        }
    });
});

app.listen(port, function(req, res){
    console.log("Server running on port 3000");
});