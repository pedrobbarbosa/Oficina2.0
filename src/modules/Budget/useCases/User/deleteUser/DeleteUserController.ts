import { container } from "tsyringe";
import { Request, response, Response } from "express";

import { DeleteUserUseCase } from "./DeleteUserUseCase"

class DeleteUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteUserUseCase = container.resolve(DeleteUserUseCase);

        await deleteUserUseCase.execute(id);

        return response.status(201).json();
    }
}
export { DeleteUserController }