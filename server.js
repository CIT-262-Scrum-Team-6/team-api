const express = require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/cameron', (req,res) => {res.send("Hello Cameron")});

app.get('/garret', (req,res) => {res.send("Hello Garret")});

app.get('/clark', (req,res) => {res.send("Hello Clark")});

app.get('/harrison', (req,res) => {res.send("Hello Harrison")});

app.get('/americo', (req,res) => {res.send("Hello Americo")});

app.listen(port, ()=>console.log("Listening"));