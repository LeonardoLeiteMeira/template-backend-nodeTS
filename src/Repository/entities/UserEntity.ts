import { Column, Entity, PrimaryColumn } from "typeorm";

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

    constructor(Id:string, Name:string, LastName:string, CPF:string){
        this.Id = Id;
        this.Name = Name;
        this.LastName = LastName;
        this.CPF = CPF;
    }
}

export default UserEntity;