import mongoose, { Schema } from 'mongoose';

const adminSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 15,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 15
    }
});
const Admin = mongoose.model('users', adminSchema);

export default Admin;