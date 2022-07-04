import {RequestHandler} from 'express'
import User, { IUser } from '../model/userModel';


const bcrypt = require('bcrypt');
const saltRounds = 14;

export type RequestController = RequestHandler | RequestHandler[]

export const createUser: RequestController = [
    async (req, res) =>{
        try {
            
            const user: IUser = req.body;
            const existingUser = await User.findOne({
                username:user.username
            });
            if(existingUser){
                return res.status(400).json('User already exists');
            }
            const salt = bcrypt.genSaltSync(saltRounds);

            const hasedPassword = bcrypt.hashSync(user.password, salt);
            const addUser = new User({
                ...user,
                password:hasedPassword,
            });

            await addUser.save();
            return res.status(201).json(addUser);
        } catch (error) {
            return res.status(500).json('internal server error');
        }
    }

];
export const loginUser: RequestController = [
    async (req, res) =>{
        try {
            const user = await User.findOne({
                username: req.body.uername
            })
//for un registered user
            if(!user){
                return res.status(404).json({
                    status: 404,
                    message: "User does not exists",
                  });
            };
//for checking a valid password
            const isPasswordValid = await bcrypt.verify(
                user.password,
                req.body.password
            );

            // const userIdlogin = await User.findOne({
            //     userId: req.session.id
            // })

            if (!isPasswordValid)
            return res
              .status(401)
              .json({ status: 401, message: "Invalid Password" });

        } catch (error) {
            return res.status(500).json('internal server error');
        }
    }

];
export const changePassword: RequestController = [
    async (req, res) =>{
        try {
          
            
        } catch (error) {
            return res.status(500).json('internal server error'); 
        }
    }

];
export const forgetPAssword: RequestController = [
    async (req, res) =>{
        try {
            
        } catch (error) {
            return res.status(500).json('internal server error');
        }
    }

];


