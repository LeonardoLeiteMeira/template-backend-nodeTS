import { Router } from 'express'
import UserController from '../Controllers/UserController';

const UserRoutes = Router();

UserRoutes.get("/",UserController.index);
UserRoutes.post("/create", UserController.create);


export default UserRoutes;
