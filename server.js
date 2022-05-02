// Importación de dependencias
const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const app = express()
const PORT = process.envPORT || 3000
// Servidor on
app.listen(PORT, () => console.log(`Servidor inicializado en puerto ${PORT}`))

// Se establece motor de plantillas handlebars abreviado "hbs"
app.set('view engine', '.hbs')
// Se utiliza método engine para definir el objeto de configuración
app.engine(
  "hbs",
  exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, './views/layouts'),
    partialsDir: path.join(__dirname, './views/components'),
    defaulLayout: "main",
    extname: ".hbs",
  })
)
// Middlewares
app.use(express.static(__dirname + '/public'))
//Se disponibilizan dependencias de bootastrap y jquery desde node_modules
app.use('/bootstrapCss', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/BootstrapJs', express.static(__dirname + '/node_modules/bootstrap/dist/js/bootstrap.js'))
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'))

// Ruta raíz que contiene el arreglo con los productos
app.get('/', (req, res) => {
  res.render('Dashboard', {
    productos: ['Banana', 'Cebollas', 'Lechuga', 'Papas','Pimenton','Tomate']
  })
})
