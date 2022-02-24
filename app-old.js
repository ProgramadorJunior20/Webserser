//servidor con http
const http = require('http');


http.createServer( (req, res) => {

    //res.writeHead(200, {'content-Type': 'application/json'})
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    res.writeHead(200, {'content-Type': 'application/csv'})

    res.write( 'id,  nombre\n' )
    res.write( '1,  jefferson\n' )
    res.write( '2,  Santiago\n' )
    res.write( '3,  Junier\n' )
    res.write( '4,  Mila\n' )
    res.write( '5,  Daniel\n' )

    res.write('Hola Mundo')
    res.end()
})
.listen( 8080 )

console.log('Escuchando el puerto', 8080)