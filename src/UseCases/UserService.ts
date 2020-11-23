import UserView from "../API/views/UserView";
import { v4 as uuidv4 } from 'uuid';
import UserEntity from "../Repository/entities/UserEntity";
import UserDatabase from "../Repository/database/UserDatabase";

class UserService{
    async createUser(userView:UserView){
        //possiveis validações 

        let uuid = uuidv4();
        const user = new UserEntity(uuid,userView.Name, userView.LastName, userView.CPF);
        let dataBaseResp = await UserDatabase.create(user);

        return dataBaseResp;
    }

    async getUsers(){
        let users = await UserDatabase.index();
        return users;
    }
}

export default new UserService();