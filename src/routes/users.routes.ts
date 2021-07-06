import { Router } from "express";
import { CreateUserController } from "../modules/Budget/useCases/User/createUser/CreateUserController";
import { ReadUsersController } from "../modules/Budget/useCases/User/readUsers/ReadUsersController";
import { UpdateUserController } from "../modules/Budget/useCases/User/updateUser/UpdateUserController";
import { DeleteUserController } from "../modules/Budget/useCases/User/deleteUser/DeleteUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const readUsersController = new ReadUsersController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

usersRoutes.get("/", readUsersController.handle);
usersRoutes.post("/", createUserController.handle);
usersRoutes.put("/:id", updateUserController.handle);
usersRoutes.delete("/:id", deleteUserController.handle)
// usersRoutes.patch("/");

export { usersRoutes };
