if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
};

const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const fs = require('fs');
const initPass = require('./passport-config');
const bodyParser = require('body-parser');
const request = require('request');

const ujs = JSON.parse(fs.readFileSync('.pass.json', 'utf8'));

initPass(passport, 
    username => ujs.username,
    id => ujs.id,
);
app.set('view-engine',  'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: false}));
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use('/assets' , express.static('assets'));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', checkAuthenticated, (req, res) =>{
    res.render('index.ejs');
});
app.get('/index', checkAuthenticated, (req, res) =>{
    res.render('index.ejs');
});

app.post('/login', passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

app.get('/login', (req, res) =>{
    res.render('login.ejs');
});

app.post('/SubsPage', (req, res) =>{
    res.render('subs.ejs');
});

function checkAuthenticated (req,res,next){
    if(req.isAuthenticated()){
        return next();
    };
    res.redirect('/login');
};

app.listen(3000);