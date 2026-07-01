const express = require('express')
const app = express()

app.get('/',(req,res)=> {
    res.status(200).send('Landing page')
})

app.get('/signin', (req,res) => {
    res.status(200).send('SignIn page')
})

app.get('/signup', (req,res) => {
    res.status(200).send('SignUp page')
})

app.get('/api/user', (req,res) =>  {
    const { products } = [
        {id: 1, name: 'keyboard'},
        {id: 2, name: 'Mouse'},
        {id :3, name: 'Monitor'}
    ]
}
)

app.listen(5000,() => {
    console.log('Server running on 5000port....')
})

/**
 * File 1=>uses http, createServer, url = req.url, res.writeHead, res.write, res.end
 * File 2=> uses http, readFIleSync, fs, 
 * File3=> uses app.get app.all express 
 * File 4=>uses express, path, app, static, res.sendFile, path.resolve(__dirname, './na..')
 * File 5=> only static no use of res.sendFile(path.resolve(__dirname, '....html'))
 * 
 * 
 */