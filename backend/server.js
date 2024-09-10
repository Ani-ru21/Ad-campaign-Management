const express = require('express');
const db = require('./database'); 
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/',(req,res) => {
    res.send("Backend express server");
});
app.get('/users', (req, res) => {
    const query = 'SELECT * FROM general'; 
    
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Database query error');
            return;
        }
        res.json(results);
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
