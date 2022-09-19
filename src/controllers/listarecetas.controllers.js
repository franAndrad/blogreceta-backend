import Receta from '../models/receta';
import { validationResult } from 'express-validator';

export const crearReceta = async (req, res) => {

    try {
        console.log(req.body);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({

                errors: errors.array(),
            });
        }
        const nuevaReceta = new Receta({
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen,
            ingredientes: req.body.ingredientes
        });
        await nuevaReceta.save();
        res.status(201).json({
            mensaje: 'La receta fue creada exitosamente',
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'La receta enviada no pudo ser creada',
        });
    }
};

export const listaRecetas = async (req, res) => {
    try {
        const listaRecetas = await Receta.find();
        res.status(200).json(listaRecetas);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar los productos',
        });
    }
};

export const obtenerReceta = async (req, res) => {
    try {
        console.log(req.params.id);
        const RecetaBuscada = await Receta.findById(req.params.id);
        res.status(200).json(RecetaBuscada);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar las recetas',
        });
    }
};

export const editarReceta = async (req, res) => {
    try {
        await Receta.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje: 'La receta fue modificada',
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar la receta',
        });
    }
};
export const borrarReceta = async (req, res) => {
    try {
        await Receta.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: 'La Receta fue eliminada correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'error al intentar buscar la tarea',
        });
    }
};

