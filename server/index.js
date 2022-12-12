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
app.post('/add/pilot', (req, res) => {
    const username = req.body.username;
    const licenseId = req.body.licenseId;
    const experience = req.body.experience;
    db.query('call add_pilot_role(?, ?, ?)', [username, licenseId, experience], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.post('/add/worker', (req, res) => {
    const username = req.body.username;
    db.query('call add_worker_role(?)', [username], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.post('/add/ingredient', (req, res) => {
    const barcode = req.body.barcode;
    const name = req.body.name;
    const weight = req.body.weight;
    db.query('call add_ingredient(?, ?, ?)', [barcode, name, weight], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.post('/add/drone', (req, res) => {
    const id = req.body.id;
    const tag = req.body.tag;
    const fuel = req.body.fuel;
    const capacity = req.body.capacity;
    const sales = req.body.sales;
    const flownBy = req.body.flownBy;
    db.query('call add_drone(?, ?, ?, ?, ?, ?)', [id, tag, fuel, capacity, sales, flownBy], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.post('/add/restaurant', (req, res) => {
    const name = req.body.name;
    const rating = req.body.rating;
    const spent = req.body.spent;
    const location = req.body.location;
    db.query('call add_restaurant(?, ?, ?, ?)', [name, rating, spent, location], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.post('/add/delivery_service', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const homeBase = req.body.homeBase;
    const manager = req.body.manager;
    db.query('call add_service(?, ?, ?, ?)', [id, name, homeBase, manager], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.post('/add/location', (req, res) => {
    const label = req.body.label;
    const xCoord = req.body.xCoord;
    const yCoord = req.body.yCoord;
    const space = req.body.space;
    db.query('call add_location(?, ?, ?, ?)', [label, xCoord, yCoord, space], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

// OTHER
app.post('/other/start_funding', (req, res) => {
    const username = req.body.username;
    const name = req.body.name;
    db.query('call start_funding(?, ?)', [username, name], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post('/other/hire_employee', (req, res) => {
    const username = req.body.username;
    const id = req.body.id;
    db.query('call hire_employee(?, ?)', [username, id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post('/other/fire_employee', (req, res) => {
    const username = req.body.username;
    const id = req.body.id;
    db.query('call fire_employee(?, ?)', [username, id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post('/other/manage_service', (req, res) => {
    const username = req.body.username;
    const id = req.body.id;
    db.query('call manage_service(?, ?)', [username, id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post('/other/takeover_drone', (req, res) => {
    const username = req.body.username;
    const drone_id = req.body.drone_id;
    const drone_tag = req.body.drone_tag;
    db.query('call takeover_drone(?, ?, ?)', [username, drone_id, drone_tag], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.post('/other/join_swarm', (req, res) => {
    const drone_id = req.body.drone_id;
    const drone_tag = req.body.drone_tag;
    const swarm_leader_drone_tag = req.body.swarm_leader_drone_tag;
    db.query('call join_swarm(?, ?, ?)', [drone_id, drone_tag, swarm_leader_drone_tag], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.post('/other/leave_swarm', (req, res) => {
    const drone_id = req.body.drone_id;
    const swarm_tag = req.body.swarm_tag;
    db.query('call leave_swarm(?, ?)', [drone_id, swarm_tag], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.post('/other/load_drone', (req, res) => {
    const drone_id = req.body.drone_id;
    const drone_tag = req.body.drone_tag;
    const barcode = req.body.barcode;
    const packages = req.body.packages;
    const price = req.body.price;
    db.query('call load_drone(?, ?, ?, ?, ?)', [drone_id, drone_tag, barcode, packages, price], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.post('/other/refuel_drone', (req, res) => {
    const drone_id = req.body.drone_id;
    const drone_tag = req.body.drone_tag;
    const fuel = req.body.fuel;
    db.query('call refuel_drone(?, ?, ?)', [drone_id, drone_tag, fuel], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

//fly_drone


app.post('/other/pruchase_ingredient', (req, res) => {
    const name = req.body.name;
    const drone_id = req.body.drone_id;
    const drone_tag = req.body.drone_tag;
    const barcode = req.body.barcode;
    const quantity = req.body.quantity;
    db.query('call pruchase_ingredient(?, ?, ?, ?, ?)', [name, drone_id, drone_tag, barcode, quantity], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post('/other/remove_ingredient', (req, res) => {
    const barcode = req.body.barcode;
    db.query('call remove_ingredient(?)', [barcode], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post('/other/remove_drone', (req, res) => {
    const drone_id = req.body.drone_id;
    const swarm_tag = swarm_tag;
    db.query('call remove_drone(?, ?)', [drone_id, swarm_tag], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post('/other/remove_pilot_role', (req, res) => {
    const username = req.body.username;
    db.query('call remove_pilot_role(?)', [username], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

// QUERYING
app.get('/username/:username', (req, res) => {
    db.query("select username from users where username=?", [req.params.username], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.get('/employee/:username', (req, res) => {
    db.query("select username from employees where username=?", [req.params.username], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.get('/employee/:taxId', (req, res) => {
    db.query("select taxId from employees where taxId=?", [req.params.taxId], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.get('/pilot/:licenseId', (req, res) => {
    db.query("select licenseId from pilots where licenseId=?", [req.params.licenseId], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.get('/ingredient/:barcode', (req, res) => {
    db.query("select barcode from ingredients where barcode=?", [req.params.barcode], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.get('/delivery_service/:id', (req, res) => {
    db.query("select id from delivery_services where id=?", [req.params.id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.get('/location/:label', (req, res) => {
    db.query("select label from location where label=?", [req.params.label], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

// VIEWS
app.get('/view/owner', (req, res) => {
    db.query("select * from display_owner_view", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.get('/view/employee', (req, res) => {
    db.query("select * from display_employee_view", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.get('/view/pilot', (req, res) => {
    db.query("select * from display_pilot_view", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.get('/view/location', (req, res) => {
    db.query("select * from display_location_view", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.get('/view/ingredient', (req, res) => {
    db.query("select * from display_ingredient_view", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.get('/view/service', (req, res) => {
    db.query("select * from display_service_view", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

// EDIT
app.get('/edit/users', (req, res) => {
    db.query("select * from users", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.delete('/delete/users/:username', (req, res) => {
    db.query("delete from users where username=?", [req.params.username], (err, result) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(result);
        }
    });
});
app.post('/update/users', (req, res) => {
    const oldUserName = req.body.oldUserName;
    const newUserName = req.body.newUserName;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const address = req.body.address;
    console.log('Updating user: ' + oldUserName + ' to ' + newUserName);
    db.query('update users set username=?, first_name=?, last_name=?, address=? where username=?',
        [newUserName, firstName, lastName, address, oldUserName],
        (err, result) => {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                res.send(result);
            }
    });
});

app.listen(3001, () => {
    console.log('Server started on port 3001');
});
