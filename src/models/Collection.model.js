const { Schema, model } = require( 'mongoose' );

const collectionSchema = new Schema ({
    coleccion:{
        type: String,
        required: true
    },
    descripcion: {
        type: String,
     

    }    
})
const collectionModel = model (
    "colecciones",
    collectionSchema
);

module.exports = collectionModel; 