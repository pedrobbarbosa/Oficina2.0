import { Request, Response } from "express";
import { container } from "tsyringe";
import { User } from "../../../entities/User";

import { UpdateSellerUseCase } from "./UpdateSellerUseCase";

class UpdateSellerController {
    public async handle(request: Request, response: Response): Promise<User> {
        const { id } = request.params;
        const { name, cpf } = request.body;

        const updateSellerUseCase = container.resolve(UpdateSellerUseCase);

        const user: User = await updateSellerUseCase.execute(id, name, cpf);

        return user;
    }
}

export { UpdateSellerController }