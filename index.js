const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Project');
require('./models/Feature');
require('./services/passport');

mongoose.connect(keys.mongoURI);
console.log('MongoDB connected...')

const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/projectRoutes')(app);
require('./routes/featureRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

console.log('we are live on port', PORT);