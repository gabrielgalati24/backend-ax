import { response, Router, Response, Request } from 'express';
import bcrypt from "bcryptjs";

//models
import prisma from '../../config/db'
import {generateToken} from "../helpers/jwt";

export const addBecado = async (req: Request, res:Response) => {
    console.log(req.body)
    try {
        const { id =1 } = req.body;
        let becadoId =1;
        const coach = await prisma.user.update({
            where: {
                id: Number(4)
            },
            data: {
                becados:{
                    connect:{
                        id:1
                    }
                },
            },
        })

        res.json({
            ok: true,
            coach
        });
    } catch (error) {
        res.json({
            ok: false,
            error
        });
    }
    
}

export const deleteBecado = async (req: Request, res:Response) => {
    console.log(req.body)
    try {
        const { id =1 } = req.body;
        let becadoId =1;
        const coach = await prisma.user.update({
            where: {
                id: Number(4)
            },
            data: {
                becados:{
                    disconnect:{
                        id:1
                    }
                },
            },
        })

        res.json({
            ok: true,
            coach
        });
    } catch (error) {
        res.json({
            ok: false,
            error
        });
    }
    
}


//agregar becado a un coach 
// const coach = await prisma.user.findMany({
    //     where: {
        //         id: Number(id)
        //     },
        //     include: {
            //         becados: true
            
//     }
// })


            // const becado = await prisma.user.update({
            //     where: {
            //         id: Number(id)
            //     },
            //     data: {
            //         becados:{
            //             connect:{
            //                 id: Number(req.body.becadoId)
            //             }
            //     }
            // })