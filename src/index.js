// variables
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const routerApi = require('./routes/route');
const main = require('./routes/main');
const path = require('path');


// setting
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// middleware
app.use(cors());
app.use(express.json());


// routes
app.use('/',main);
routerApi(app);



app.listen(port, () => console.log(`Listening on port ${port}`));