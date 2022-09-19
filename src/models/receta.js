import mongoose, { Schema } from 'mongoose';

const recetaSchema = new Schema({
    titulo: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
        unique: true,
    },
    descripcion: {
        type: String,
        required: true,
        minlength: 5,
    },
    imagen: {
        type: String
    },
    ingredientes: {
        type: Array,
        required: true,
    },
});
const Receta = mongoose.model('receta', recetaSchema);

export default Receta;