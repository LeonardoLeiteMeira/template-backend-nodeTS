import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity("User")
class UserEntity {

    @PrimaryColumn()
    Id:string

    @Column()
    Name:string;

    @Column()
    LastName:string;

    @Column()
    CPF:string;

    constructor(props: Omit<UserEntity,'Id'>, id?:string){
        Object.assign(this, props);
        if(!id){
            let uuid = uuidv4();
            this.Id = uuid;
        }
    }
}

export default UserEntity;