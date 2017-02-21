
let express = require('express');

let app = express();

const PORT = process.env.PORT || 3000;

//To redirect any https request to http
app.use((req, res, next)=>{
    if(req.headers['x-forwarded-proto'] === 'http'){
        next();
    }else{
        res.redirect('http://' + req.hostname + req.url);
    }
})

app.use(express.static('build'));

app.listen(PORT, ()=>{
    console.log("Server running at ", PORT);
})
