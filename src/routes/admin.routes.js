import { Router } from "express";
import { listarAdminstrador } from "../controllers/usearadmin.controllers";

const router = Router();

router
    .route('/')
    .get(listarAdminstrador)

export default router;