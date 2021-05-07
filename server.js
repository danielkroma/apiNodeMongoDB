
require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
 
mongoose.connect( process.env.CONNECTIONSTRING, { useNewUrlParser: true ,  useUnifiedTopology: true } )
.then(()=> {
    console.log('conectei á base de dados')
    app.emit('pronto');
})
.catch(e=>console.log(e));


app.use(express.urlencoded({extended:true}));

app.get('/',(req, res) =>{
    res.send('<form action ="/" method="POST"> Nome: <input type="text" name="nome"></input> <button>ENVIR</button> </form>    ');
});

app.post('/',(req, res) =>{
    console.log(req.body);
    res.send(`O que você enviou foi: ${req.body.nome}`);
});

app.on('pronto',()=>{
    app.listen(3000,() => {
        console.log('acessar http://localhost:3000');
        console.log('servidor executando na porta 3000')
    })
})



app.get('/contato',(req,res) =>{
    res.send('obrigado por entrar em contato');
});