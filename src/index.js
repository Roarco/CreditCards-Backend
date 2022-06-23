// variables
const express = require('express');
const app = express();
// const port = process.env.PORT || 5000;
const cors = require('cors');
const routerApi = require('./routes/route');
const path = require('path');


// setting
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// middleware
app.use(cors());
app.use(express.json());


// routes
routerApi(app);

// static files
app.use(express.static(path.join(__dirname, 'dist')));

// start server
// app.listen(port, () => console.log(`Listening on port ${port}`));
const server = app.listen(process.env.PORT || 5000, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
});