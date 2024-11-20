const { Schema, model } = require( 'mongoose' );

const categorySchema = new Schema ({
    categoria:{
        type: String,
        required: true
    },
    descripcion: {
        type: String,
     

    }    
})
const categoryModel = model (
    "categorias",
    categorySchema
);

module.exports = categoryModel; 