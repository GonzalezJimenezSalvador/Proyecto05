/*
Base de datos de consolas
*/
db.consolas.drop()
db.consolas.insertMany([
    {
        consola: "PlayStation 4",
        precioConsola: 249,
        fechaLanzamiento: new Date(2013-11-29),
        suscripcionMensual: true,
        cuotaMensual: 5.99,
    },
    {
        consola: "PlayStation 5",
        precioConsola: 499,
        fechaLanzamiento: new Date(2020-11-19),
        suscripcionMensual: true,
        cuotaMensual: 9.99,
    },
    {
        consola: "Nintendo Switch",
        precioConsola: 299,
        fechaLanzamiento: new Date(2017-03-03),
        suscripcionMensual: false,
        cuotaMensual: 0,
    },
    {
        consola: "XBox X",
        precioConsola: 499,
        jugadoresTotal: 12000000,
        fechaLanzamiento: new Date(2020-11-10),
        suscripcionMensual: false,
        cuotaMensual: 0,
    },
])
/*
Base de datos de juegos
*/
db.juegos.drop()
db.juegos.insertMany([
    {
        juego: "Gran Turismo 7",
        precioVenta: 69.99, 
        edadMinima: 3,
        plataformas: ["PlayStation 5", "PlayStation 4"],
        fechaLanzamiento: new Date("2022-03-04"), 
        genero: "Coches",
        cooperativo: true
    },
    {
        juego: "Call of Dutty: Vanguard",
        precioVenta: 69.99, 
        edadMinima: 18,
        plataformas: ["PlayStation 5", "PlayStation 4", "XBox X"],
        fechaLanzamiento: new Date("2021-11-05"), 
        genero: "Disparos",
        cooperativo: true
    },
    {
        juego: "Ratchet & Clank",
        precioVenta: 79.99, 
        edadMinima: 7,
        plataformas: ["PlayStation 5"],
        fechaLanzamiento: new Date("2021-06-11"), 
        genero: "Aventuras",
        cooperativo: false
    },
    {
        juego: "Destiny 2: La Reina Bruja",
        precioVenta: 39.99, 
        edadMinima: 16,
        plataformas: ["PlayStation 5", "PlayStation 4", "XBox X"],
        fechaLanzamiento: new Date("2022-02-22"), 
        genero: "Disparos",
        cooperativo: false
    },
    {
        juego: "The Legend of Zelda",
        precioVenta: 64.95, 
        edadMinima: 12,
        plataformas: ["Nintendo Switch"],
        fechaLanzamiento: new Date("2017-03-03"), 
        genero: "Aventuras",
        cooperativo: false
    },
    {
        juego: "Dragon Quest XI",
        precioVenta: 59.99, 
        edadMinima: 12,
        plataformas: ["Nintendo Switch", "PlayStation 4", "XBox X"],
        fechaLanzamiento: new Date("2019-09-27"), 
        genero: "Aventuras",
        cooperativo: true
    },
    {
        juego: "Mario Kart 8 Deluxe",
        precioVenta: 54.95, 
        edadMinima: 3,
        plataformas: ["Nintendo Switch"],
        fechaLanzamiento: new Date("2017-04-28"), 
        genero: "Coches",
        cooperativo: true
    },
    {
        juego: "Undertale",
        precioVenta: 14.99, 
        edadMinima: 0,
        plataformas: ["PlayStation 4", "Nintendo Switch", "XBox X"],
        fechaLanzamiento: new Date("2022-03-04"), 
        genero: "Aventuras",
        cooperativo: true
    },
    {
        juego: "Hollow Knight",
        precioVenta: 14.99, 
        edadMinima: 0,
        plataformas: ["PlayStation 4", "XBox X", "Nintendo Switch"],
        fechaLanzamiento: new Date("2022-03-04"), 
        genero: "Aventuras",
        cooperativo: false
    },
    {
        juego: "Animal Crossing: New Horizons",
        precioVenta: 59.99, 
        edadMinima: 3,
        plataformas: ["Nintendo Switch"],
        fechaLanzamiento: new Date("2020-03-20"), 
        genero: "Estrategia",
        cooperativo: true
    },
    {
        juego: "Far Cry 6",
        precioVenta: 69.99, 
        edadMinima: 3,
        plataformas: ["PlayStation 5", "PlayStation 4", "XBox X"],
        fechaLanzamiento: new Date("2021-10-07"), 
        genero: "Disparos",
        cooperativo: false
    },
    {
        juego: "Forza Horizon 5",
        precioVenta: 69.99, 
        edadMinima: 3,
        plataformas: ["XBox X"],
        fechaLanzamiento: new Date("2021-11-09"), 
        genero: "Coches",
        cooperativo: true
    },
    {
        juego: "Edge of Eternity",
        precioVenta: 29.99, 
        edadMinima: 16,
        plataformas: ["PlayStation 5", "PlayStation 4", "XBox X"],
        fechaLanzamiento: new Date("2022-02-10"), 
        genero: "Aventuras",
        cooperativo: true
    },
    {
        juego: "Death's Door",
        precioVenta: 19.99, 
        edadMinima: 12,
        plataformas: ["PlayStation 5", "PlayStation 4", "XBox X", "Nintendo Switch"],
        fechaLanzamiento: new Date("2021-07-20"), 
        genero: "Estrategia",
        cooperativo: false
    },
    {
        juego: "Battlefield 2042",
        precioVenta: 79.99, 
        edadMinima: 18,
        plataformas: ["PlayStation 5", "PlayStation 4", "XBox X"],
        fechaLanzamiento: new Date("2021-11-19"), 
        genero: "Disparos",
        cooperativo: true
    },
    {
        juego: "Life is Strange: True Colors",
        precioVenta: 59.99, 
        edadMinima: 16,
        plataformas: ["PlayStation 5", "PlayStation 4", "XBox X", "Nintendo Switch"],
        fechaLanzamiento: new Date("2021-09-10"), 
        genero: "Aventuras",
        cooperativo: false
    },
    {
        juego: "Assassin's Creed Valhalla",
        precioVenta: 69.99, 
        edadMinima: 18,
        plataformas: ["PlayStation 5", "PlayStation 4", "XBox X"],
        fechaLanzamiento: new Date("2022-03-04"), 
        genero: "Aventuras",
        cooperativo: false
    },
    {
        juego: "God of War",
        precioVenta: 69.99, 
        edadMinima: 18,
        plataformas: ["PlayStation 5", "PlayStation 4"],
        fechaLanzamiento: new Date("2018-04-20"), 
        genero: "Estrategia",
        cooperativo: false
    },
    {
        juego: "DIRT 5",
        precioVenta: 39.99, 
        edadMinima: 12,
        plataformas: ["PlayStation 5", "PlayStation 4", "XBox X"],
        fechaLanzamiento: new Date("2020-11-06"), 
        genero: "Coches",
        cooperativo: true
    },
    {
        juego: "Batman: Arkham Knight",
        precioVenta: 69.95, 
        edadMinima: 16,
        plataformas: ["PlayStation 4", "XBox X"],
        fechaLanzamiento: new Date("2015-06-23"), 
        genero: "Aventuras",
        cooperativo: true
    },
    {
        juego: "Elden Ring",
        precioVenta: 69.99, 
        edadMinima: 16,
        plataformas: ["PlayStation 5", "PlayStation 4"],
        fechaLanzamiento: new Date("2022-02-25"), 
        genero: "Aventuras",
        cooperativo: false
    },
    {
        juego: "Halo Infinite",
        precioVenta: 69.99, 
        edadMinima: 16,
        plataformas: ["XBox X"],
        fechaLanzamiento: new Date("2021-12-08"), 
        genero: "Disparos",
        cooperativo: true
    },
])
/*
Base de datos de jugadores
*/
db.jugadores.drop()
db.jugadores.insertMany([
{
    Nombre: "Esperanza Romero",
    Edad: 6,
    correoElectronico: "EsperanzaRom@gmail.com",
    NombresUsuarios: ["OscarDevil", "UraniumHadess"],
},
{
    Nombre: "Virgilio Lafuente",
    Edad: 18,
    correoElectronico: "VirgilioLaf@gmail.com",
    NombresUsuarios: ["JustDream", "DevilFreedom"],
},
{
    Nombre: "JoseMaria Sanz",
    Edad: 16,
    correoElectronico: "JoseMariaSan@gmail.com",
    NombresUsuarios: ["GxPoney", "ShadowCrazy"],
},
{
    Nombre: "Claudio Ledesma",
    Edad: 20,
    correoElectronico: "ClaudioLed@gmail.com",
    NombresUsuarios: ["TruckLord", "SwordWitcher"],
},
{
    Nombre: "Cristina Villanueva",
    Edad: 17,
    correoElectronico: "CristinaVil@gmail.com",
    NombresUsuarios: ["ShieldOscar", "GameVirus"],
},
{
    Nombre: "Antonio Bonet",
    Edad: 8,
    correoElectronico: "AntonioBon@gmail.com",
    NombresUsuarios: ["PhantomMini", "ChickenFish"],
},
{
    Nombre: "Angel Vegas",
    Edad: 13,
    correoElectronico: "AngelVeg@gmail.com",
    NombresUsuarios: ["DelaFire", "CrabyX"],
},
{
    Nombre: "Yesica Cerezo",
    Edad: 9,
    correoElectronico: "YesicaCer@gmail.com",
    NombresUsuarios: ["DoorCaptain", "OmegaRiku"],
},
{
    Nombre: "Alejandra Asensio",
    Edad: 7,
    correoElectronico: "AlejandraAse@gmail.com",
    NombresUsuarios: ["TheFantasy", "LivelyPrincess"],
},
{
    Nombre: "Emiliana Rios",
    Edad: 11,
    correoElectronico: "EmilianaRio@gmail.com",
    NombresUsuarios: ["HulkRoxxor", "SniperCaptain"],
},
{
    Nombre: "Jose Vazquez",
    Edad: 15,
    correoElectronico: "JoseVaz@gmail.com",
    NombresUsuarios: ["BestHack", "NightDemonic"],
},
{
    Nombre: "Raul Olmos",
    Edad: 6,
    correoElectronico: "RaulOlm@gmail.com",
    NombresUsuarios: ["PrincessMoon", "VirusHeal"],
},
{
    Nombre: "Antonio Checa",
    Edad: 14,
    correoElectronico: "AntonioChe@gmail.com",
    NombresUsuarios: ["BladeSea", "FreestyleViper"],
},
{
    Nombre: "Rogelio Marques",
    Edad: 11,
    correoElectronico: "RogelioMar@gmail.com",
    NombresUsuarios: ["TekLotus", "GalacticHulk"],
},
{
    Nombre: "Davinia Pereira",
    Edad: 19,
    correoElectronico: "DaviniaPer@gmail.com",
    NombresUsuarios: ["HulkCar", "SmallTruck"],
},
{
    Nombre: "Nayara Gilabert",
    Edad: 13,
    correoElectronico: "NayaraGil@gmail.com",
    NombresUsuarios: ["BloodSun", "GalacticRuby"],
},
{
    Nombre: "Saray Galan",
    Edad: 14,
    correoElectronico: "SarayGal@gmail.com",
    NombresUsuarios: ["BoldSmall", "BoltPhantom"],
},
{
    Nombre: "Jesus Vargas",
    Edad: 6,
    correoElectronico: "JesusVar@gmail.com",
    NombresUsuarios: ["BlackBlue", "BloodStrong"],
},
{
    Nombre: "Candido Garcia",
    Edad: 15,
    correoElectronico: "CandidoGar@gmail.com",
    NombresUsuarios: ["DoorOmega", "BadboyOmega"],
},
{
    Nombre: "Florencio Poveda",
    Edad: 8,
    correoElectronico: "FlorencioPov@gmail.com",
    NombresUsuarios: ["FreedomVador", "WitcherDemonic"],
},
{
    Nombre: "Patricio Baez",
    Edad: 19,
    correoElectronico: "PatricioBae@gmail.com",
    NombresUsuarios: ["WaitRush", "DinoPickle"],
},
{
    Nombre: "Justo Flores",
    Edad: 6,
    correoElectronico: "JustoFlo@gmail.com",
    NombresUsuarios: ["ShadowNight", "StunCraft"],
},
{
    Nombre: "Jorge Casanovas",
    Edad: 20,
    correoElectronico: "JorgeCas@gmail.com",
    NombresUsuarios: ["Werlyb", "SapphireStun"],
},
{
    Nombre: "Fidel Padron",
    Edad: 8,
    correoElectronico: "FidelPad@gmail.com",
    NombresUsuarios: ["FlyCocoa", "HydroGamer"],
},
{
    Nombre: "Tamara Bermudez",
    Edad: 20,
    correoElectronico: "TamaraBer@gmail.com",
    NombresUsuarios: ["SasukeAlpha", "PrimusRiver"],
},
{
    Nombre: "Carolina Plasencia",
    Edad: 20,
    correoElectronico: "CarolinaPla@gmail.com",
    NombresUsuarios: ["RoxxorSkill", "UraniumAura"],
}, 
{
    Nombre: "Victoriano Fernandez",
    Edad: 7,
    correoElectronico: "VictorianoFer@gmail.com",
    NombresUsuarios: ["MiloSniper", "WhiteHulk"],
},
{
    Nombre: "Jacobo Parra",
    Edad: 8,
    correoElectronico: "JacoboPar@gmail.com",
    NombresUsuarios: ["PaperDuck", "LegendBest"],
},
{
    Nombre: "Modesta Garces",
    Edad: 15,
    correoElectronico: "ModestaGar@gmail.com",
    NombresUsuarios: ["FlammeWolf", "OnixSasuke"],
},
{
    Nombre: "Teodoro Corrales",
    Edad: 19,
    correoElectronico: "TeodoroCor@gmail.com",
    NombresUsuarios: ["BlueZe", "SunriseHeal"],
},  
{
    Nombre: "Roberto Cerezo",
    Edad: 16,
    correoElectronico: "RobertoCer@gmail.com",
    NombresUsuarios: ["KillDear", "MiniSteak"],
},
])