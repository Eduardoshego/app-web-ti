//importar express
const { response } = require('express');
const express = require('express');
//iniciar o express
const app = express();

//nome da pasta dist que sera feita o build
const appName = 'app-web-ti';
//loca do build
const outputPath = `${__dirname}/dist/appName`;

//seta o diretório de  build para servir o conteudo angular

app.use(express.static(outputPath));

//redirecionar para index.html
app.get('/*', (req,res)=>{
    res.sendFile(`${outputPath}/index.html`);
});

//Porta do heroku
app.listen(process.env.PORT);
