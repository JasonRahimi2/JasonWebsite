require('dotenv').config();
const supabaseClient = require('@supabase/supabase-js')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))

const supabaseURL = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = supabaseClient.createClient(supabaseURL, supabaseKey)

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.post('/Message', async (req, res) => {
    console.log('Attempting to POST data')
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let phone = req.body.phone;
    let message = req.body.message;

    const {data, error} = await supabase
    .from('Message')
    .insert({'first_name': firstName, 'last_name': lastName, 'email': email, 'phone': phone, 'message': message})
    .select()
    if(error) {
        console.log('Error');
        res.send(error);
    }
    else {
        res.send(data);
        console.log(data);
    }

})

app.listen(port, () => {
    console.log('APP IS ALIVE');
})