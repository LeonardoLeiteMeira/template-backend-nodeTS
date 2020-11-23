import { getRepository } from "typeorm";
import Messenger from "../../Domain/models/Messenger";
import UserEntity from "../entities/UserEntity";

class UserDatabase{
    async index(){
        const repository = getRepository(UserEntity);
        let users = await repository.find();
        return users;
    }

    async create(user: UserEntity){
        const repository = getRepository(UserEntity);
        
        try{
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
}

export default new UserDatabase();