/*
Una persona de 12 años de edad esta planteándose comprar una Nintendo Switch, le interesan
los juegos de su edad del tipo aventura y cuanto le costará comprar todos los juegos junto
con la consola
*/

db.consolas.aggregate([
    {
        $match: {
            consola: "Nintendo Switch"
        }
    },
    {
        $lookup: {
            from: "juegos",
            localField: "consola",
            foreignField: "plataformas",
            as: "juegosCompatibles"
        }
    },
    {
        $unwind : "$juegosCompatibles" 
    },
    {
        $project: {
            _id:0,
            consola:1,
            juego:"$juegosCompatibles.juego",
            precioConsola:1,
            precioJuego: "$juegosCompatibles.precioVenta",
            edadMinima:"$juegosCompatibles.edadMinima",
            genero:"$juegosCompatibles.genero",
        }
    },
    {
        $match: {
            genero: "Aventuras",
            $expr: { $lte: ["$edadMinima", 12]},
        }
    },
    {
        $group: {
            _id: "$genero",
            precioTotalJuegos: {$sum: "$precioJuego"},
            precioTotalConsola: {$first: "$precioConsola"}
        }
    },
    {
        $project: {
            precioJuegos: {$round: ["$precioTotalJuegos",2]},
            precioConsola: "$precioTotalConsola",
            precioTotal: {$round: [{$sum: ["$precioTotalConsola", "$precioTotalJuegos"]},2]}
        }
    }
]).pretty()

/*
Un comprador de 12 años, quere comprar el juego de animal crosing. La madre, que quiere 
recompensarlo, quiere saber si este juego es apto para su hijo, qué consola es la que 
necesitaría y que precio total tendría que puediera jugar durante los dos meses de vacaiones 
de verano. 
*/

db.juegos.aggregate([
    {
        $match: {
            juego: 'Animal Crossing: New Horizons'
        }
    }, {
        $lookup: {
            from: 'consolas',
            localField: 'plataformas',
            foreignField: 'consola',
            as: 'ConsolasCompatibles'
        }
    }, {
        $unwind: {
            path: '$ConsolasCompatibles'
        }
    }, {
        $project: {
            edadMinima: 1,
            juego: 1,
            consola: '$ConsolasCompatibles.consola',
            cuotaTotal: {
                $multiply: [
                    '$ConsolasCompatibles.cuotaMensual',
                    2
                ]
            }
        }
    }
]).pretty()

/*
Virgilio Lafuente quiere jugar al ultimo juego de coches para PlayStation 5 
que le esté permitido jugar con su edad, no quiere pagar más de 50€ y le gustaría que 
fuera cooperativo para jugar con sus amigos.
*/

db.jugadores.aggregate([{
    $match: {
        Nombre: 'Virgilio Lafuente'
    }
}, {
    $lookup: {
        from: 'consolas',
        localField: 'nombre',
        foreignField: 'consola',
        as: 'TodasLasConsolas'
    }
}, {
    $project: {
        _id: 0,
        consola: 'PlayStation 5'
    }
}, {
    $lookup: {
        from: 'juegos',
        localField: 'consola',
        foreignField: 'plataformas',
        as: 'juegosCompatibles'
    }
}, { $unwind: '$juegosCompatibles' }, {
    $project: {
        _id: 0,
        consola: 1,
        juego: '$juegosCompatibles.juego',
        edadMinima: '$juegosCompatibles.edadMinima',
        precio: '$juegosCompatibles.precioVenta',
        cooperativo: '$juegosCompatibles.cooperativo',
        fecha: '$juegosCompatibles.fechaLanzamiento',
        genero: '$juegosCompatibles.genero'
    }
}, {
    $match: {
        genero: 'Coches',
        $expr: {
            $lte: [
                '$precio',
                50
            ]
        },
        cooperativo: true
    }
}, {
    $sort: {
        fecha: -1
    }
}, { $limit: 1 }]).pretty()