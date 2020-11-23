import { NextFunction, Request, Response } from 'express';
import UserService from '../../Domain/UserService';
import UserView from '../views/UserView';

class UserController {

    async index(request: Request, response: Response, next:NextFunction){
        try{
            let serviceRep = await UserService.getUsers();

            return response.status(200).send(serviceRep);
            
        }catch(ex){
            next(ex);
        }
        
    }

    async create(request: Request, response: Response, next:NextFunction){
        try{
            const {Name, LastName, CPF} = request.body;
            let user = new UserView(Name, LastName, CPF);

            let serviceRep = await UserService.createUser(user);

            if(serviceRep.status){
                return response.status(200).send("Deu bom chefe!");
            }

            return response.status(400).send(serviceRep.message);
            

        }catch(ex){
            next(ex);
        }
    }
}

export default new UserController();