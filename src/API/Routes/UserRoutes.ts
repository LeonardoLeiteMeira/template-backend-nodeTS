import { Router } from 'express'
import UserController from '../Controllers/UserController';

const UserRoutes = Router();

UserRoutes.get("/",UserController.index);


export default UserRoutes;
