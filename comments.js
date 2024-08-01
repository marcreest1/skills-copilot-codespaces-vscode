// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Static files
app.use(express.static('public'));

// Route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/comments', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

// Listen
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
