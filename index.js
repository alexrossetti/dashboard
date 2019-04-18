const express = require('express');
const mysql = require ('mysql');

const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    
});

const db = mysql.createConnection({
    host: 'localhost',
    // Insert username and password credentials here
    user: '',  
    password: '',
    database: 'dashboard'
});

db.connect((err) => {
    if (err) throw err;
});


app.get('/top', (req, res) => {
    let query = 'SELECT * FROM top';
    executeQuery(query, req, res);
});


app.get('/weekly', (req, res) => {
    let query = "SELECT * FROM weekly";
    executeQuery(query, req, res);
});

app.get('/weekly/aisle', (req, res) => {
    let query = "SELECT * FROM weekly WHERE product='Aisle'";
    executeQuery(query, req, res);
});

app.get('/weekly/brand', (req, res) => {
    let query = "SELECT * FROM weekly WHERE product='Brand'";
    executeQuery(query, req, res);
});

app.get('/weekly/offer', (req, res) => {
    let query = "SELECT * FROM weekly WHERE product='Offer'";
    executeQuery(query, req, res);
});


executeQuery = (query, req, res) => {
    db.query(query, (err, result) => {
        if (err){
            console.log(err.stack);
            res.status(500).json({
                'error': 'Server error'
            })
        } else {
            res.json({
                'table': result
            });
        }
        
    });
}


app.listen(port, () => {
    console.log(`App started; listening on port ${port}`);
});
