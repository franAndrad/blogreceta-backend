import Admin from "../models/admin";
import { validationResult } from 'express-validator';

export const listarAdminstrador = async (req,res) => {
    try {
        const listaAdmin = await Admin.find();
        res.status(200).json(listaAdmin);
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: "no se encontro ningun administrador"
        });
    }
}

export const crearAdministrador = async (req, res) => {

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
            });
        }
        const nuevoAdmin = new Admin({
            nombre: req.body.nombre,
            password: req.body.password
        });
        await nuevoAdmin.save();
        res.status(201).json({
            mensaje: 'El admin fue creado exitosamente',
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'El admin enviado no pudo ser creado',
        });
    }
};