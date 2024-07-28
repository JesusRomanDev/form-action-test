import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();

const port = 4001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Para servir archivos estaticos en la raiz y poder leer index y submit html


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'index.html'));
// });

// app.use(express.static(path.join(__dirname, '..')));
// app.get('/submit', (req, res) => {
//     console.log('Llegaste');
//     res.redirect('/nueva.html');
// });

app.get('/submit.html', (req, res) => {
    console.log('Hola');
    // res.redirect('/indexx.html');
})

app.listen(port, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port} `);
})