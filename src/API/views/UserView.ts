class UserView{
    Name:string
    LastName:string
    CPF:string

    constructor(props: UserView){
        this.Name = props.Name;
        this.LastName = props.LastName;
        this.CPF = props.CPF
    }
}

export default UserView;