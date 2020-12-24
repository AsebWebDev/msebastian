import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App'

const app = express();
const PORT = 8000;

app.use('^/$', (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
        if(err) {
            console.log(err)
            return res.status(500).send(err.message)
        }
        return res.send(data.replace('<div id="root">', `<div id="root">${ReactDOMServer.renderToString(<App /> )}</div>`))
    })
}) 

app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.listen(PORT, () => console.log(`App launched on Port ${PORT}`))