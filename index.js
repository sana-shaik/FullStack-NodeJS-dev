const express = require('express');
const router = express.Router();

const routes = require('./routes/routes');

//Port
const PORT = 8000;

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//router middleware
router.use((req, res, next) => {
    next();
})

//APIs
app.use('/', router);

//API Call sending router to routes.js
routes(router);


app.listen(PORT, () => console.log(`Listening to ${PORT}`))