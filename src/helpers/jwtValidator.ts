import jwt from 'jsonwebtoken';
import { Request ,Response , NextFunction} from 'express';
const privateKey =  process.env.SECRET || 'furry'
export const validateJWT = ( req: Request , res :Response, next: NextFunction ) => {

    // Leer token
    const token = req.header('x-token');

    if ( !token ) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    try {

        const { uid } = jwt.verify( token, privateKey );
        req.uid = uid;
        
        next();

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        })
    }




}



