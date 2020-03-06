let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let personaSchema = new Schema({
    id: { type: String },
    nombres: { type: String },
    apellidos: { type: String },
    token: { type: String }
}, { versionKey: false });

let Persona = mongoose.model('Personas', personaSchema);

module.exports = Persona;