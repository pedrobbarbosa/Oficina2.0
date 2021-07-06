import { container } from "tsyringe"
import { Request, Response } from "express";

import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { name, cpf } = request.body;

        const updateUserUseCase = container.resolve(UpdateUserUseCase);

        const user = await updateUserUseCase.execute(id, name, cpf);

        return response.status(201).json(user);

    }
}
export { UpdateUserController }