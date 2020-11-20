import { NextFunction, Request, Response } from 'express';


class UserController {

    async index(request: Request, response: Response, next:NextFunction){
        try{
            return response.json({"users":["Leonardo","Marcus","Altamiro","Saulo"]})
        }catch(ex){
            next(ex);
        }
        
    }
}

export default new UserController();