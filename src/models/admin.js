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
        minlength: 8,
        maxlength: 16
    }
});
const Admin = mongoose.model('admins', adminSchema);

export default Admin;