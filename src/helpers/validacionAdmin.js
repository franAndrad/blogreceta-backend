import { check } from 'express-validator';
import resultadosValidacion from './resultadoValidacion';

const validarAdmin= [
    check('nombre')
        .notEmpty()
        .withMessage('El nombre es obligatorio')
        .isLength({ min: 2, max: 10 })
        .withMessage('El titulo de la Receta debe tener entre 2 y 10 catacteres'),
    check('password')
        .notEmpty()
        .isLength({ min: 8, max: 15 })
        .withMessage('La contraseña debe contener entre 8 a 15 caracteres'),
    (req, res, next) => {
        resultadosValidacion(req, res, next);
    }
];
export default validarAdmin;