import { Router } from "express";
import { listarAdminstrador, crearAdministrador } from "../controllers/usearadmin.controllers";
import validarAdmin from "../helpers/validacionAdmin"

const router = Router();

router
    .route('/')
    .get(listarAdminstrador)
    .post(validarAdmin,crearAdministrador)

export default router;