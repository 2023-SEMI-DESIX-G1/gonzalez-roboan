
// Importar los módulos necesarios
const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const app = express();
app.use(cors());



// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: process.env.DB_SERVER,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datoss.');
});

// Función para obtener los productos de la base de datos



//rutas de Express
app.get('/Principal', (req, res) => {

  // Consulta SQL a ejecutar
  connection.query('SELECT * FROM productos', (err, results) => {
    if (err)
      throw err;
    res.json(results);

  });


});

//rutas de Express
app.get('/detalles', (req, res) => {
  const id = req.query.id;

  // Consulta SQL a ejecutar
  connection.query(`SELECT * FROM productos where id = ${id} `, (err, results) => {
    if (err)
      throw err;
    res.json(results);

  });

});

app.get('/login', (req, res) => {
  const correo = req.query.correo;
  const contasena = req.query.contasena;
  connection.query(`SELECT * FROM usuarios where correo = "${correo}" and contrasena = "${contasena}" `, (err, results) => {
    if (err)
      throw err;
    res.json(results);


  });
});

app.get('/register', (req, res) => {
  const nombre = req.query.nombre;
  const apellido = req.query.apellido;
  const correo = req.query.email;
  const contrasena = req.query.password;
  const dni = req.query.dni;
  console.log(nombre);

  connection.query(`SELECT * FROM usuarios where cedula = "${dni}" `, (err, results) => {
    if (err)
    throw err;

    if (results.length === 0) {
      connection.query(`INSERT INTO usuarios (nombre, apellido, correo, contrasena, trn, cedula) VALUES ("${nombre}", "${apellido}", "${correo}", "${contrasena}", "678" , "${dni}")`, (err, results) => {
        if (err) {
          console.error('Error al insertar en la base de datos:', err);
          res.json(1);
        } else {
          connection.query(`SELECT * FROM usuarios where cedula = "${dni}" `, (err, results) => {
            res.json(results);
          });
        }
      });



    } else {
      console.log("entre")
      res.json(results);
    }

    
  });
});


app.get('/', (req, res) => {
  res.send('¡Hola, este es mi servidor Express!');
});

// Iniciar el servidor Express
const port = process.env.PORT || 3000; // Puerto del servidor
app.listen(port, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${port}`);
});
