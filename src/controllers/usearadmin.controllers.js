import Admin from "../models/admin";

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