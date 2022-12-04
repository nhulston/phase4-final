const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'restaurant_supply_express'
});

// ADDING A NEW ITEM TO THE DATABASE
app.post('/add/owner', (req, res) => {
    const username = req.body.username;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const address = req.body.address;
    const birthday = req.body.birthday;
    db.query('call add_owner(?, ?, ?, ?, ?)', [username, firstName, lastName, address, birthday], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.post('/add/employee', (req, res) => {
    const username = req.body.username;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const address = req.body.address;
    const birthday = req.body.birthday;
    const taxID = req.body.taxId;
    const experience = req.body.experience;
    const hiredDate = req.body.hireDate;
    const salary = req.body.salary;
    db.query('call add_employee(?, ?, ?, ?, ?, ?, ?, ?, ?)', [username, firstName, lastName, address, birthday, taxID, hiredDate, experience, salary], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

// QUERYING
app.get('/get/username', (req, res) => {
    db.query(`select count(*) from users where username=?`, [req.body.username], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3001, () => {
    console.log('Server started on port 3001');
});