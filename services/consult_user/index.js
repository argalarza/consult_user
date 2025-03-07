const express = require('express');
const cors = require('cors');
const { showUser } = require('./controllers/consultcontroller'); // Controlador de mostrar usuario

const app = express();
const PORT = 3005; // Puedes elegir otro puerto si lo deseas

app.use(cors());
app.use(express.json());

// Ruta para mostrar usuario
app.get('/user/:username', showUser);

app.listen(PORT, () => {
  console.log(`Show user service running on port ${PORT}`);
});
