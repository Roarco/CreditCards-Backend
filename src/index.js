// variables
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const routerApi = require('./routes/route');
const path = require('path');


// setting
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// middleware
app.use(express.json());
app.use(cors());

// routes
routerApi(app);

// static files
app.use(express.static(path.join(__dirname, 'dist')));

// start server
app.listen(port, () => console.log(`Listening on port ${port}`));