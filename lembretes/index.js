const express = require ('express')
const app = express()

//get localhost: 4000/lembretes
app.get('/lembretes',(req, res) => {
    
})//dentro desse .get() é o que voce deseja


//post será usado através do localhost

app.post('/lembretes', (req, res) =>{

})

app.listen(4000,() => console.log('Lembretes porta 4000'))