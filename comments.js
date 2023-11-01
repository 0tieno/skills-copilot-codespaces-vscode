// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET comments
app.get('/comments', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.sendFile(path.join(__dirname + '/data/comments.json'));
});

// POST comments
app.post('/comments', function(req, res) {
    // Get comments from file
    let comments = JSON.parse(fs.readFileSync(path.join(__dirname + '/data/comments.json'), 'utf8'));

    // Set id
    let id = 0;
    comments.forEach(comment => {
        if (comment.id > id) {
            id = comment.id;
        }
    });
});
