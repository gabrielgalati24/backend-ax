import { response, Router, Response, Request } from 'express';
import bcrypt from "bcryptjs";

//models
import prisma from '../../config/db'
import {generateToken} from "../helpers/jwt";

export const getAllUsers = async (req: Request, res:Response) => {
    try {
        const users = await prisma.user.findMany({
            include: {
                becados: true

                
            }
        });
        res.json({
            ok: true,
            users
        });
    } catch (error) {
        res.json({
            ok: false,
            error
        });
    }

}

export const getUser = async (req: Request, res:Response) => {
    try {
        const { id } = req.body;
        const user = await prisma.user.findOne({
            where: {
                id: Number(id)
            },
        });
        res.json({
            ok: true,
            user
        });
    } catch (error) {
        res.json({
            ok: false,
            error
        });
    }

}

export const updateUser = async (req: Request, res:Response) => {
    try {
        const { id } = req.body;
        const user = await prisma.user.update({
            where: {
                id: Number(id)
            },
            data: {
                ...req.body
            },
        });
        res.json({
            ok: true,
            user
        });
    } catch (error) {
        res.json({
            ok: false,
            error
        });
    }

}

export const createUser = async (req: Request, res:Response) => {
    try {
        const { email ="3"} = req.body;
        const user = await prisma.user.create({
            data: {
                email,
               
            },
        });
        res.json({
            ok: true,
            user
        });
    } catch (error) {
        res.json({
            ok: false,
            error
        });
    }

}

export const loginUser = async (req: Request, res:Response) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findOne({
            where: {
                email,
            },
        });
        if (!user) {
            return res.json({
                ok: false,
                error: 'User not found'
            });
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.json({
                ok: false,
                error: 'Invalid password'
            });
        }
        const token = generateToken(user.id);
        res.json({
            ok: true,
            token
        });
    } catch (error) {
        res.json({
            ok: false,
            error
        });
    }

}

export const renewToken = async (req: Request, res:Response) => {
    try {
        const { id } = req.body;
        const user = await prisma.user.findOne({
            where: {
                id: Number(id)
            },
        });
        if (!user) {
            return res.json({
                ok: false,
                error: 'User not found'
            });
        }
        const token = generateToken(user.id);
        res.json({
            ok: true,
            token
        });
    } catch (error) {
        res.json({
            ok: false,
            error
        });
    }

}