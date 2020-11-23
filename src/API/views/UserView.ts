class UserView{
    Name:string
    LastName:string
    CPF:string

    constructor(props: UserView){
        Object.assign(this, props);
    }
}

export default UserView;