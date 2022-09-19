import { check } from 'express-validator';
import resultadosValidacion from './resultadoValidacion';

const validarReceta = [
    check('titulo')
        .notEmpty()
        .withMessage('El titulo de la receta es obligatorio')
        .isLength({ min: 2, max: 50 })
        .withMessage('El titulo de la Receta debe tener entre 2 y 50 catacteres'),
    check('descripcion', 'La descripcion de la Receta es obligatoria')
        .notEmpty()
        .isLength({ min: 5 })
        .withMessage('La descripcion de la receta debe contener al menos 5 caracteres'),

    (req, res, next) => {
        resultadosValidacion(req, res, next);
    },
];
export default validarReceta;
