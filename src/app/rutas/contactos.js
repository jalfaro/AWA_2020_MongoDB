const contacto = require('../model/contactos');
module.exports = (app) => {
    app.get('/contacto', (req, res) => {
        contacto.find((err, datos)=> {
            if (err) res.status(400).json({status:0, mensaje:"No se pudieron obtener los contactos"});
            res.status(200).json({status:1, listado: datos});
        });
    });
    
    app.get('/contacto/:nombre', (req, res) => {
        contacto.find({nombre: new RegExp(req.params.nombre)}).then((err, datos) => {
            if (err) res.status(400).json({status:0, mensaje:"No se pudieron obtener los contactos"});
            res.status(200).json({status:1, listado: datos});
        });
    });
    app.post('/contacto', (req, res) => {
        let temp = new contacto({
            nombre: req.body.nombre,
            telefono: req.body.telefono,
            direccion: req.body.direccion
        });
        temp.save().then((result) => {
            res.json({status:1, mensaje:"Contacto insertado correctamente"});
        });
    });

    app.put('/contacto/:nombre', (req, res) => {
        var query = {'nombre': req.body.nombre};
        req.body.nombre = req.params.nombre;
        contacto.findOneAndUpdate(query, req.body, function(err, doc) {
            if (err) return res.send(500, {error: err});
            return res.json({status: 1, mensaje:'Succesfully saved.'});
        });
    });

}