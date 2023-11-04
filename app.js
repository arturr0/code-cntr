const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const routes = require('./routes/index');
const session = require('express-session');
const subpageRouter1 = require('./routes/service1'); // Import the subpage router
const subpageRouter2 = require('./routes/service2');
const subpageRouter3 = require('./routes/service3');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
    res.header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
    res.header('Pragma', 'no-cache');
    res.header('Expires', '0');
    next();
});
app.use('/public', express.static(path.join(__dirname, 'public'), { 'Content-Type': 'text/javascript' }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(flash());

app.use('/', routes); // Use the main router
app.use('/service1', subpageRouter1);
app.use('/service2', subpageRouter2);
app.use('/service3', subpageRouter3);
app.use(
    session({
        secret: "I am girl",
        resave: true,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 // Set an appropriate expiration time in milliseconds
        }
    })
);
 
// Get function in which send session as routes.
app.get('/', function (req, res, next) {
    if (req.session.views) {
        req.session.views++;
        res.write('<p>Number of views: ' + req.session.views + '</p>');
        res.end();
    } else {
        req.session.views = 1;
        res.end('New session is started');
    }
});

app.get('/visitCount', (req, res) => {
    if (req.session.views) {
        res.json({ visitCount: req.session.views });
    } else {
        res.json({ visitCount: 0 });
    }
});

module.exports = app;