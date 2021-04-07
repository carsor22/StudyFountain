
const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect Database

connectDB();

//Init middleware

app.use(express.json({ extenmded: false }));

app.get('/', (req, res) => res.send('API Running'));

//define and access routes (rest endpoints to hit)

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

