const express = require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('Hello World ')
});

app.post('/',(req,res)=>{
    //logic
    res.send('Post request')
})

app.put('/',(req,res)=>{
    //logic
    res.send('PUT request')
})

app.delete('/',(req,res)=>{
    //logic
    res.send('DELETE request')
})

app.listen(3000,(req,res)=>{
    console.log('server running on port 3000');
})