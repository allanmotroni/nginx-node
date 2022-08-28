const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql')

app.get('/', (req, res) => {

    const connection = mysql.createConnection(config)
    try {
        var name = 'ALLAN'
        const sqlInsert = `INSERT INTO people (name) VALUES ('${name}')`

        connection.query(sqlInsert)

        console.log(`Nome: '${name}' inserido no banco de dados!`)
    } catch (error) {
        console.error(`ERRO NO INSERT: ${error}`)
    }

    const sqlGet = `SELECT name FROM people`

    let retorno = '<h1>Full Cycle Rocks!</h1>'
    connection.query(sqlGet, function (err, result, fields) {
        if (err) {
            console.error(`ERRO NO SELECT: ${err}`)
        }

        if (result) {
            console.log('RESULTADO!')
            retorno += '<ol>'
            for (let index = 0; index < result.length; index++) {
                const element = result[index];
                console.log(element.name)
                retorno += `<li>${element.name}</li>`
            }
            retorno += '</ol>'
        }
        else {
            console.log('SEM RESULTADO')
            retorno = 'SEM RESULTADO!'
        }

        res.send(retorno)
    })
    connection.end()
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}...`)
})