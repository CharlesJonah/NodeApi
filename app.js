let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    logger = require('morgan'),
    mongoose = require('mongoose'),
    Task = require('./models/userModel'),
    bodyParser = require('body-parser');

// mongoose instance connection- url connection

mongoose.connect('mongodb://localhost/Users', {
    useMongoClient: true,
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const userRoutes = require('./routes/userRoutes');

app.use('/users', userRoutes);
app.listen(port);

app.use(logger(`Listening on port${port}`));