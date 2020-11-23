import UserView from "../../API/views/UserView";
import UserEntity from "../../Repository/entities/UserEntity";
import UserDatabase from "../../Repository/database/UserDatabase";

class UserService{
    async createUser(userView:UserView){
        //possiveis validações 

        const user = new UserEntity(userView);
        let dataBaseResp = await UserDatabase.create(user);

        return dataBaseResp;
    }

    async getUsers(){
        let users = await UserDatabase.index();
        const usersView:Array<UserView> = [];
        users.forEach(user =>{
            usersView.push(new UserView(user));
        })
        return usersView;
    }

    async getUser(CPF:string){
        let dbResp = await UserDatabase.getUser(CPF)
        if(dbResp.status){
            let user = new UserView(dbResp.data);
            dbResp.data = user;
            return dbResp;
        }

        return dbResp;
    }
}

export default new UserService();