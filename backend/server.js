const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle form submissions
app.post('/submit', (req, res) => {
  const { firstName, lastName, email, queryType, message } = req.body;
  console.log(`Received submission: ${firstName} ${lastName}, ${email}, ${queryType}, ${message}`);

  // Here, you could save the data to a database or perform other operations

  res.status(200).send({ message: 'Form submission received!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
