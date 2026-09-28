const express = require('express');
const cors = require('cors');
const mysql = require('mysql/promise');
const multer = require('multer');
const path = require('path');

const db = mysql.createpool({ 
    host:'localhost',
    user:'admin',
    password:'1234',
    database:'cadastro',
    port:3306,
});


app.use('uploads',express.static(path.join(__dirname,'uploads')))