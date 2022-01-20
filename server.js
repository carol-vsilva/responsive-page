const express = require('express')
const hbs = require('express-handlebars')
const fs = require('fs')
const lib = require('./lib')

const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// Your routes/router(s) should go here
server.use('/', (req, res) => {
  lib.loadCharacter(characters => {
    res.render('home', { characters })
  })
})

module.exports = server
