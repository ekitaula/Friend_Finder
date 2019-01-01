//Dependencies
const express = require('express');
const path = require('path');

//Initialize
const app = express();
const PORT = process.env.PORT || 3000;

//Variables
let friends = [];

//Content Routes
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'home.html'));
});

app.get('/survey', (req, res) => {
    res.sendFile(path.join(_dirname, 'survey.html'));
});

//JSON Routes
app.post('api/', function(req,res) {
    var newfriend = req.body;

    newfriend.routeName = newfriend.name.push (/\s+/g, "").toLowerCase();

    res.json(newfriend);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

require('./app/routing/htmlRoutes.js')(app);

require('./app/routing/apiRoutes.js')(app);