/*
Virgilio Lafuente quiere jugar a un juego de coches para PlayStation 5 que le esté permitido
jugar con su edad, no quiere pagar más de 50€ y le gustaría que fuera cooperativo para 
jugar con sus amigos.
*/

db.jugadores.aggregate([
    {
        $match: {
            Nombre: "Virgilio Lafuente"
        }
    },
    {
        $lookup: {
            from: "consolas",
            localField: "nombre",
            foreignField: "consola",
            as: "TodasLasConsolas"
        }
    },
    {
        $project: {
            _id:0,
            consola: "PlayStation 5",
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
            edadMinima:"$juegosCompatibles.edadMinima",
            precio:"$juegosCompatibles.precioVenta",
            cooperativo:"$juegosCompatibles.cooperativo",
            fecha:"$juegosCompatibles.fechaLanzamiento",
            genero:"$juegosCompatibles.genero"
        }
    },
    {
        $match: {
            genero: "Coches",
            $expr: { $lte: ["$edad", "$edadMinima"]},
            $expr: { $lte: ["$precio", 50 ]},
            cooperativo: true
        }
    },
]).pretty()

/*
El usuario XXXXX ha reportado al usuario PhantomMini por ofenderlo verbalmente en un juego,
queremos saber los datos de la persona que utiliza este usuario para enviarle un correo
notificándole una sanción.
*/

db.jugadores.aggregate([
    {
    $unwind : "$NombresUsuarios"
    },
    {
        $match: {
            NombresUsuarios: "PhantomMini"
        }
    },
    {
        $lookup: {
            from: "consolas",
            localField: "nombre",
            foreignField: "consola",
            as: "TodasLasConsolas"
        }
    },
    {
        $project: {
            _id:0,
            consola: "PlayStation 5",
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
            edadMinima:"$juegosCompatibles.edadMinima",
            precio:"$juegosCompatibles.precioVenta",
            cooperativo:"$juegosCompatibles.cooperativo",
            fecha:"$juegosCompatibles.fechaLanzamiento",
            genero:"$juegosCompatibles.genero"
        }
    },
    {
        $match: {
            genero: "Coches",
            $expr: { $lte: ["$edad", "$edadMinima"]},
            $expr: { $lte: ["$precio", 50 ]}
        }
    },
]).pretty()


/*
Una persona de 12 años de edad esta planteándose comprar una consola, le interesa saber que consola
le permite jugar a mas juegos de su edad del tipo aventura y cuanto le costarían todos los juegos.
no quiere pagar suscripcion mensual.
*/

db.consolas.aggregate([
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
            precioConsola:1,
            juego:"$juegosCompatibles.juego",
            edadMinima:"$juegosCompatibles.edadMinima",
            precioJuego:"$juegosCompatibles.precioVenta",
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


    }
]).pretty()



/*
Un hijo, que ha sacado muy buenas notas, le pide a su madre que le compre el juego de animal crosing.
La madre, que quiere recompensarlo, quiere saber si este juego es apto para su hijo, qué consola es la que 
necesitaría y que precio total tendría que puediera jugar durante los dos meses de vacaiones de verano. 
*/


/*
El usuario XXX quiere saber a que juego puede jugar con los usuarios xxxx y xxxxx sin tener que adquirir juegos nuevo ni consola nueva.
*/