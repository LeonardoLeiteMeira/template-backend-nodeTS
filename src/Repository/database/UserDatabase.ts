import { getRepository } from "typeorm";
import Messenger from "../../Domain/models/Messenger";
import UserEntity from "../entities/UserEntity";

class UserDatabase{
    async index(){
        try{
            const repository = getRepository(UserEntity);
            let users = await repository.find();
            return users;
        }catch(er){
            throw er;
        }
    }

    async create(user: UserEntity){
        try{
            const repository = getRepository(UserEntity);
        
        
            const userExist = await repository.findOne({where:{CPF:user.CPF}});
            if(!userExist){
                let newUser = repository.create(user);
                repository.save(newUser);
                return new Messenger({status:true, message:"Usuário criado com sucesso!"});
            }

            return new Messenger({status:false,message:"Esse usuário já existe!"});

        }catch(ex){
            throw (ex);
        }
    }

    async getUser(CPF:string){
        try{
            const repository = getRepository(UserEntity);
            let user = await repository.findOne({where:{CPF:CPF}});
            if(user){
                return new Messenger({
                    status:true,
                    data:user
                });
            }
            return new Messenger({
                status:false,
                message:"User not found"
            });

        }catch(er){
            throw er
        }
    }
}

export default new UserDatabase();