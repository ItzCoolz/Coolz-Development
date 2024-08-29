const http = require('http');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/tos', (req, res) => {
    res.render('tos');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.get('/error', (req, res) => {
    res.render('error');
});

app.get('/marketplace', (req, res) => {
    res.render('marketplace');
});

app.use((req, res, next) => {
    res.status(404).render('error');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});