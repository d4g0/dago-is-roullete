const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3030;
const path = require('path');
const DATA_PATH = path.join(__dirname, 'data', 'data.json');
const ROULLETE = path.join(__dirname, 'public', 'roullete.html');;



app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// user data form 
app.post('/client', (req, res) => {
    //implement user data saving function
    console.log('query:', req.query,
        'body : ', req.body);
    append_to_file(DATA_PATH, req.body);
    //form data saved serv the roullete page
    res.sendFile(ROULLETE);
});

app.post('/card', (req, res) => {
    //implement user data saving function
    append_to_file(DATA_PATH, req.body);
    console.log('card saved..')

});

app.get('/data', (req, res) => {
    res.sendFile(DATA_PATH);
});

app.listen(PORT);
console.log(`app at 127.0.0.1:${PORT}`);


//**************  HELPERS *************/
// save n overwrite a file with a JSON object
function append_to_file(data_path, object) {
    fs.appendFile(data_path, JSON.stringify(object), (err) => {
        if (err) throw err;
    })
}

function get_file(data_path) {

}




// console log usefull shorcouts

// req keys
// console.log('HEADER : ', req.header,
//             ' BODY : ', req.body,
//             ' QUERY : ', req.query,
//             ' PARAMS : ', req.params);