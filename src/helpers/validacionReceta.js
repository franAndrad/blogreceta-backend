import { check } from 'express-validator';
import resultadosValidacion from './resultadoValidacion';

const validarReceta = [
    check('titulo')
        .notEmpty()
        .withMessage('El titulo de la receta es obligatorio')
        .isLength({ min: 2, max: 50 })
        .withMessage('El titulo de la Receta debe tener entre 2 y 50 catacteres'),
    check('descripcion')
        .notEmpty()
        .isLength({ min: 5 })
        .withMessage('La descripcion de la receta debe contener al menos 5 caracteres'),
    check('imagen', 'La url de la imagen es invalida')
        .isLength({min:0,max:500})
        .withMessage('La url debe contener menos de 500 caracteres'),
    check('ingredientes')
        .custom((input)=>{
            let verdaderos = 0;
            input.forEach(element => {
                if (element.length >= 2 && element.length <= 50)
                    verdaderos++;
            });
            if (input.length === verdaderos && input.length > 0) {
                return true;
            } else {
                return false;
            }
        })
        .withMessage('Debe contener al menos un ingrediente y estos deben estar entre 2 a 60 caracteres'),
    (req, res, next) => {
        resultadosValidacion(req, res, next);
    },
];
export default validarReceta;
