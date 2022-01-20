const fs = require('fs')

function loadCharacter(callback) {
  fs.readFile('./data.json', 'utf-8', (err, data) => {
    const characters = JSON.parse(data).sannin
    callback(characters)
  })
}

module.exports = {loadCharacter}