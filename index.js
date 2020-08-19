const express = require('express');
const apiRouter = require('./routes/api/pas');
const adminRouter = require('./routes/admin');
const cors = require('cors');

const PORT = process.env.PORT || 5000; //Check the process.env configuration

const app = express();

app.set('view engine', 'ejs');

//https://stackoverflow.com/questions/56328474/origin-http-localhost4200-has-been-blocked-by-cors-policy-in-angular7
app.use(cors());

//Body parser middleware to be able to receive body
app.use(express.json());

//  Bodyparser to handle form data
app.use(express.urlencoded( { extended: false}));
app.use(express.json());


app.get('/', (req, res) => {
    res.render('home');
});


app.use('/admin', adminRouter);
app.use('/pas/api', apiRouter);


app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));

