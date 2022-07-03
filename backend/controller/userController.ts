import {RequestHandler} from 'express'

export type RequestController = RequestHandler | RequestHandler[]

export const createUser: RequestController = [
    async (req, res) =>{
        
    }

]